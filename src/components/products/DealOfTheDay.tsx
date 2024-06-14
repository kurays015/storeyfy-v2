import { DealOfTheDayCarousel } from "@/components/products/DealOfTheDayCarousel";
import HeaderTitle from "@/components/HeaderTitle";

export default function DealOfTheDay() {
  return (
    <div>
      <HeaderTitle className="font-semibold text-slate-700 mb-6 text-lg border-b border-b-gray-300 tracking-wide mt-8">
        Deal Of The Day
      </HeaderTitle>
      <DealOfTheDayCarousel />
    </div>
  );
}
