import { Suspense } from "react";
import ProductBySubCategoryContent from "@/components/products/product-sub-category-content";
import ProductCardGridSkeleton from "@/components/skeletons/product-card-grid-skeleton";
import HeaderTitle from "@/components/header-title";

export default function ProductBySubCategory({
  params,
}: {
  params: { category: string; subCategory: string };
}) {
  return (
    <div>
      <HeaderTitle className="mb-6 border-b text-lg font-semibold tracking-wide text-slate-700 dark:text-white">
        {decodeURIComponent(params.subCategory)} Products
      </HeaderTitle>
      <Suspense fallback={<ProductCardGridSkeleton />}>
        <ProductBySubCategoryContent
          subCategory={decodeURIComponent(params.subCategory)}
        />
      </Suspense>
    </div>
  );
}
