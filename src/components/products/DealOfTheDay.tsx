import { DealOfTheDayCarousel } from "@/components/products/DealOfTheDayCarousel";
import ProductHeaderTitle from "@/components/products/ProductHeaderTitle";

export default function DealOfTheDay() {
  return (
    <div>
      <ProductHeaderTitle className="font-semibold text-slate-700 mb-6 text-lg border-b border-b-gray-300 tracking-wide mt-8">
        Deal Of The Day
      </ProductHeaderTitle>
      <DealOfTheDayCarousel />
    </div>
  );
}
