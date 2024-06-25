import SideBar from "@/components/SideBar";
import { ReactNode } from "react";

export default function SingleProductLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main>
      <SideBar />
      {children}
    </main>
  );
}
