import SideBar from "@/components/side-bar";
import RecommendedProducts from "@/components/products/recommended-products";
import { SingleProductLayoutProps } from "@/types";
import { BreadCrumbs } from "@/components/breadcrumbs";

export default function SingleProductLayout({
  children,
  params,
}: SingleProductLayoutProps) {
  return (
    <main className="my-12 xl:container customSm:px-4 md:mx-auto md:max-w-3xl lg:max-w-7xl">
      <BreadCrumbs />
      <div className="flex gap-7">
        <SideBar />
        <div>
          <div>{children}</div>
          <RecommendedProducts category={params.category} id={params.id} />
        </div>
      </div>
    </main>
  );
}
