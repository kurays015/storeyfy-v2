import { Suspense } from "react";
import { DealOfTheDayCarousel } from "@/components/deal-of-the-day/deal-of-the-day-caousel";
import HeaderTitle from "@/components/header-title";
import DealOfTheDaySkeleton from "@/components/skeletons/deal-of-the-day-skeleton";

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
