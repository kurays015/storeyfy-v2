import { Suspense } from "react";
import NewArrivals from "@/components/products/new-arrival/page";
import Trending from "@/components/products/trending/page";
import TopRated from "@/components/products/top-rated/page";
import HeaderTitle from "@/components/HeaderTitle";
import { ProductTrendsSkeleton } from "@/components/skeletons/ProductTrendsSkeleton";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export default function TrendingProducts() {
  return (
    <div>
      <HeaderTitle className="font-semibold text-slate-700 mb-6 text-lg border-b tracking-wide dark:text-white">
        Product Trends
      </HeaderTitle>

      <ScrollArea className="whitespace-nowrap rounded-md border p-4">
        <div className="flex customSm:gap-5 customSm:flex-col lg:flex-row  lg:w-full lg:gap-10">
          <Suspense fallback={<ProductTrendsSkeleton />}>
            <NewArrivals />
          </Suspense>
          <Suspense fallback={<ProductTrendsSkeleton />}>
            <NewArrivals />
          </Suspense>
          <Suspense fallback={<ProductTrendsSkeleton />}>
            <NewArrivals />
          </Suspense>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
