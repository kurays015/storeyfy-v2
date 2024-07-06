import HeaderTitle from "@/components/header-title";
import RecommendedProductsContent from "@/components/products/recommended-products-content";
import ProductCardGridSkeleton from "@/components/skeletons/product-card-grid-skeleton";
import { Suspense } from "react";

export default function RecommendedProducts({
  category,
  id,
}: {
  category: string;
  id: string;
}) {
  return (
    <div>
      <HeaderTitle className="mb-6 mt-8 border-b text-lg font-semibold tracking-wide text-slate-700 dark:text-white">
        Recommended Products
      </HeaderTitle>
      <Suspense fallback={<ProductCardGridSkeleton />}>
        <RecommendedProductsContent category={category} id={id} />
      </Suspense>
    </div>
  );
}
