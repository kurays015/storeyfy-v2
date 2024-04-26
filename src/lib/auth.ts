import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

export const authConfig = {
  // adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/signin",
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

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) return null;

        const isPasswordMatch = await compare(
          credentials.password,
          user.password as string
        );

        console.log(user);

        if (!isPasswordMatch) return null;

        return user;
      },
    }),
    // ...add more providers here
  ],

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions;

export function getSession() {
  return getServerSession(authConfig);
}
