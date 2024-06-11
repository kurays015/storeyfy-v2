import TrendingProducts from "@/components/products/TrendingProducts";
import DealOfTheDay from "@/components/products/DealOfTheDay";

export default function Products() {
  return (
    <div className="overflow-auto">
      <TrendingProducts />
      <DealOfTheDay />
    </div>
  );
}
