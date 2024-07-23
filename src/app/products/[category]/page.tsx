import { Suspense } from "react";
import ProductCardGridSkeleton from "@/components/skeletons/product-card-grid-skeleton";
import HeaderTitle from "@/components/header-title";
import ProductByCategoryContent from "@/components/products/product-by-category-content";

export default function ProductByCategory({
  params,
}: {
  params: { category: string };
}) {
  return (
    <div>
      <HeaderTitle className="mb-6 border-b text-lg font-semibold tracking-wide text-slate-700 dark:text-white">
        {decodeURIComponent(params.category)} Products
      </HeaderTitle>
      <Suspense fallback={<ProductCardGridSkeleton />}>
        <ProductByCategoryContent category={params.category} />
      </Suspense>
    </div>
  );
}
