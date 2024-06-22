import { Suspense } from "react";
import HeaderTitle from "@/components/HeaderTitle";
import MostSoldProductsGrid from "@/components//products/MostSoldProductsGrid";
import { MostSoldProductsSkeleton } from "@/components/skeletons/MostSoldProductsSkeleton";

export function MostSoldProducts() {
  return (
    <div>
      <HeaderTitle className="mb-6 mt-8 border-b text-lg font-semibold tracking-wide text-slate-700 dark:text-white">
        Most Sold Products
      </HeaderTitle>
      <Suspense fallback={<MostSoldProductsSkeleton />}>
        <MostSoldProductsGrid />
      </Suspense>
    </div>
  );
}
