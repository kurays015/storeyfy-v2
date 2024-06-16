import { DealOfTheDayCarousel } from "@/components/products/DealOfTheDayCarousel";
import HeaderTitle from "@/components/HeaderTitle";
import { Suspense } from "react";
import { DealOfTheDaySkeleton } from "../skeletons/DealOfTheDaySkeleton";

export default function DealOfTheDay() {
  return (
    <div>
      <HeaderTitle className="font-semibold text-slate-700 mb-6 text-lg border-b border-b-gray-300 tracking-wide mt-8">
        Deal Of The Day
      </HeaderTitle>
      <Suspense fallback={<DealOfTheDaySkeleton />}>
        <DealOfTheDayCarousel />
      </Suspense>
    </div>
  );
}
