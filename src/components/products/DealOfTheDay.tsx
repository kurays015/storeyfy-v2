import { DealOfTheDayCarousel } from "@/components/products/DealOfTheDayCarousel";
import HeaderTitle from "@/components/HeaderTitle";
import { Suspense } from "react";
import { DealOfTheDaySkeleton } from "../skeletons/DealOfTheDaySkeleton";

export default function DealOfTheDay() {
  return (
    <div>
      <HeaderTitle className="mb-6 mt-8 border-b text-lg font-semibold tracking-wide text-slate-700 dark:text-white">
        Deal Of The Day
      </HeaderTitle>
      <Suspense fallback={<DealOfTheDaySkeleton />}>
        <DealOfTheDayCarousel />
      </Suspense>
    </div>
  );
}
