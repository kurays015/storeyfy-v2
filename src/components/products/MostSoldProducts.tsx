import { Suspense } from "react";
import HeaderTitle from "@/components/HeaderTitle";
import ProductCardGridSkeleton from "@/components/skeletons/ProductCardGridSkeleton";
import MostSoldProductsContent from "@/components/products/MostSoldProductsContent";

export function MostSoldProducts() {
  return (
    <div>
      <HeaderTitle className="mb-6 mt-8 border-b text-lg font-semibold tracking-wide text-slate-700 dark:text-white">
        Most Sold Products
      </HeaderTitle>
      <Suspense fallback={<ProductCardGridSkeleton />}>
        <MostSoldProductsContent />
      </Suspense>
    </div>
  );
}
