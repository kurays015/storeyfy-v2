import DealOfTheDay from "@/components/deals/deal-of-the-day";
import { MostSoldProducts } from "@/components/products/most-sold-products";
import TrendingProducts from "@/components/trending-products/trending-products";

export default function Products() {
  return (
    <div className="overflow-hidden">
      <TrendingProducts />
      {/* <DealOfTheDay /> */}
      <MostSoldProducts />
    </div>
  );
}
