import TrendingProducts from "@/components/products/TrendingProducts";
import DealOfTheDay from "@/components/products/DealOfTheDay";
import { MostSoldProducts } from "@/components/products/MostSoldProducts";

export default function Products() {
  return (
    <div className="overflow-auto">
      <TrendingProducts />
      <DealOfTheDay />
      <MostSoldProducts />
    </div>
  );
}
