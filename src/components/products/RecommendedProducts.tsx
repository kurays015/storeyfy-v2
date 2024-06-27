import HeaderTitle from "@/components/HeaderTitle";
import RecommendedProductsContent from "@/components/products/RecommendedProductsContent";
import ProductCardGridSkeleton from "@/components/skeletons/ProductCardGridSkeleton";
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
