import { Suspense } from "react";
import HeaderTitle from "@/components/HeaderTitle";
import MostSoldProductsGrid from "@/components//products/MostSoldProductsGrid";
import { MostSoldProductsSkeleton } from "@/components/skeletons/MostSoldProductsSkeleton";

export function MostSoldProducts() {
  return (
    <div>
      <HeaderTitle className="font-semibold text-slate-700 mt-8 mb-6 text-lg border-b tracking-wide dark:text-white">
        Most Sold Products
      </HeaderTitle>
      <Suspense fallback={<MostSoldProductsSkeleton />}>
        <MostSoldProductsGrid />
      </Suspense>
    </div>
  );
}
