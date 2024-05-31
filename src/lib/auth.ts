import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";
import db from "./db";

const prisma = new PrismaClient();

// for session id fix
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authConfig = {
  adapter: PrismaAdapter(prisma) as Adapter,
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) return null;

        const isPasswordMatch = await compare(
          credentials.password,
          user.password as string
        );

        if (!isPasswordMatch) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    //jwt callback will run first before session
    async jwt({ token, user }) {
      const dbUser = await db.user.findUnique({
        where: {
          email: token.email as string,
        },
      });

      if (!dbUser) {
        throw new Error("no user with email found");
      }

      //the return value here can be access in token object in session callback
      return {
        id: dbUser.id,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },

    async session({ token, session }) {
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email,
          image: token.picture,
        };
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions;

export function getSession() {
  return getServerSession(authConfig);
}
