import SideBar from "@/components/side-bar";
import RecommendedProducts from "@/components/products/recommended-products";
import {
  SingleProductLayoutProps,
  SingleProductPageParamsProps,
} from "@/types";
import { BreadCrumbs } from "@/components/breadcrumbs";
import { Metadata } from "next";
import { DL } from "@/data-layer";

export async function generateMetadata({
  params,
}: SingleProductPageParamsProps): Promise<Metadata> {
  const product = await DL.query.getSingleProduct(params.id);

  if (!product) return { title: "Product not found" };

  return {
    title: product?.title,
    description: product?.description,
  };
}

export default function SingleProductLayout({
  children,
  params,
}: SingleProductLayoutProps) {
  return (
    <main className="my-12 xl:container customSm:px-4 md:mx-auto md:max-w-3xl lg:max-w-7xl">
      <BreadCrumbs />
      <div className="flex lg:gap-7">
        <SideBar />
        <div className="flex-1">
          <div>{children}</div>
          <RecommendedProducts category={params.category} id={params.id} />
        </div>
      </div>
    </main>
  );
}
