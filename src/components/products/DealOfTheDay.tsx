import { DealOfTheDayCarousel } from "./DealOfTheDayCarousel";

export default function DealOfTheDay() {
  return (
    <div>
      <h1 className="font-semibold text-slate-700 mb-6 text-lg border-b border-b-gray-300 tracking-wide mt-8">
        Deal Of The Day
      </h1>
      <DealOfTheDayCarousel />
    </div>
  );
}
