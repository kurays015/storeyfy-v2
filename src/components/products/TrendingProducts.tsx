import { Suspense } from "react";
import NewArrivals from "@/components/products/new-arrival/page";
import Trending from "@/components/products/trending/page";
import TopRated from "@/components/products/top-rated/page";
import HeaderTitle from "@/components/HeaderTitle";
import ProductTrendsSkeleton from "@/components/skeletons/ProductTrendsSkeleton";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

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
