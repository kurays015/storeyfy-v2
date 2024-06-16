import { Suspense } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import NewArrivals from "@/components/products/new-arrival/page";
import Trending from "@/components/products/trending/page";
import TopRated from "@/components/products/top-rated/page";
import HeaderTitle from "@/components/HeaderTitle";
import { ProductTrendsSkeleton } from "@/components/skeletons/ProductTrendsSkeleton";

export default function TrendingProducts() {
  return (
    <>
      <HeaderTitle className="font-semibold text-slate-700 mb-6 text-lg border-b border-b-gray-300 tracking-wide">
        Product Trends
      </HeaderTitle>
      <ScrollArea className="whitespace-nowrap rounded-xl border p-4">
        <div className="flex gap-10 w-max">
          <Suspense fallback={<ProductTrendsSkeleton />}>
            <NewArrivals />
          </Suspense>

          <Suspense fallback={<ProductTrendsSkeleton />}>
            <Trending />
          </Suspense>

          <Suspense fallback={<ProductTrendsSkeleton />}>
            <TopRated />
          </Suspense>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
}
