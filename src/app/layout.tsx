import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HolyLoader from "holy-loader";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import NextAuthProvider from "./providers/next-auth-provider";
import { Toaster } from "@/components/ui/toaster";
import MobileBottomNav from "@/components/mobile/mobile-bottom-nav";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { siteMetadata } from "@/config/siteMetadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  creator: siteMetadata.creator,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: siteMetadata.image,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <HolyLoader
        color="#6FA8FF"
        height=".2rem"
        speed={250}
        easing="linear"
        showSpinner
      />
      <body className={inter.className} suppressHydrationWarning>
        <NextAuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div>
              <Header />
              {children}
              <MobileBottomNav />
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}

//1. Form Type - FormEvent<HTMLFormElement>
//2. children type - React.ReactNode
//3. object type - type TypeOfSomething ={
//   id: number,
//   name: string,
//   isCompleted: boolean
// }
//4.--> union type sample:  ---
// 1. string | number
// 2. type Todo = {
//   id: number,
//   todo: string | number,
//   isCompleted: boolean,
// }
// type Something = {
//   something: string
// }
// interface Something2 {
//   some: number
// }
// type SomethingType = {
//   someType: Something | Something2
// }
//5. you can add "type" word on import to make it more readable,example: import type { somePackage } from "some-package"
//6.tuple, a specific type on array -> [string, number, boolean]
//7. you can add type on state like this, useState<Todo[]>([])
