import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import db from "./db";
import { loginSchema } from "./formSchema";
import { DL } from "@/data-layer";

// for session id fix
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authConfig = {
  adapter: PrismaAdapter(db),
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
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const parsedData = loginSchema.safeParse({
          email: credentials.email,
          password: credentials.password,
        });

        if (!parsedData.success) return null;

        const user = await DL.query.findUser(parsedData.data.email);

        if (!user) {
          throw new Error("User doesn't exist!");
        }

        const isPasswordMatch = await compare(
          credentials.password,
          user.password as string,
        );

        if (!isPasswordMatch) {
          throw new Error("Invalid Credentials");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    //jwt callback will run first before session
    async jwt({ token, user }) {
      const dbUser = await DL.query.findUser(token.email as string);

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
