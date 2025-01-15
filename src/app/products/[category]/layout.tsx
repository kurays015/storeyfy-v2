import SideBar from "@/components/side-bar";
import { BreadCrumbs } from "@/components/breadcrumbs";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products By Category",
  description: "all products by category page",
};

export default function ProductByCategoryLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="my-12 xl:container customSm:px-4 md:mx-auto md:max-w-3xl lg:max-w-7xl">
      <BreadCrumbs />
      <div className="flex gap-7">
        <SideBar />
        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
}
