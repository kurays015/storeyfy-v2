import { Suspense } from "react";

import HeaderTitle from "@/components/HeaderTitle";
import ProductTrendsSkeleton from "@/components/skeletons/ProductTrendsSkeleton";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import NewArrivals from "@/components/trending-products/new-arrival";
import Trending from "@/components/trending-products/trending";
import TopRated from "@/components/trending-products/top-rated";

export default function TrendingProducts() {
  return (
    <div>
      <HeaderTitle className="mb-6 border-b text-lg font-semibold tracking-wide text-slate-700 dark:text-white">
        Product Trends
      </HeaderTitle>

      <ScrollArea className="whitespace-nowrap rounded-md border p-4">
        <div className="flex customSm:flex-col customSm:gap-5 lg:w-full lg:flex-row lg:gap-10">
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
    </div>
  );
}
