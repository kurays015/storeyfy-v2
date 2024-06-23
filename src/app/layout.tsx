import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HolyLoader from "holy-loader";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import NextAuthProvider from "./providers/NextAuthProvider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/mobile/MobileBottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "StoreyfyV2",
    template: "%s | StoreyfyV2",
  },
  description:
    "Storeyfy is an ecommerce platform made by Christ Narvarte. Has a CRUD features, you can create, update, and delete product as you like, you can also add them to cart...",
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
