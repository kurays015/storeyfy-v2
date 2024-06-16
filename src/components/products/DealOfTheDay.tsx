import { DealOfTheDayCarousel } from "@/components/products/DealOfTheDayCarousel";
import HeaderTitle from "@/components/HeaderTitle";
import { Suspense } from "react";
import { DealOfTheDaySkeleton } from "../skeletons/DealOfTheDaySkeleton";

export default function DealOfTheDay() {
  return (
    <div>
      <HeaderTitle className="font-semibold text-slate-700 mb-6 text-lg border-b tracking-wide mt-8 dark:text-white">
        Deal Of The Day
      </HeaderTitle>
      <Suspense fallback={<DealOfTheDaySkeleton />}>
        <DealOfTheDayCarousel />
      </Suspense>
    </div>
  );
}
