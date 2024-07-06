import DealOfTheDay from "@/components/deal-of-the-day/deal-of-the-day";
import { MostSoldProducts } from "@/components/products/MostSoldProducts";
import TrendingProducts from "@/components/trending-products/TrendingProducts";

export default function Products() {
  return (
    <div className="overflow-hidden">
      <TrendingProducts />
      <DealOfTheDay />
      <MostSoldProducts />
    </div>
  );
}
