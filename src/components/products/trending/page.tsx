import ProductMiniCard from "@/components/products/ProductMiniCard";
import HeaderTitle from "@/components/HeaderTitle";
import { DL } from "@/data-layer";

export default async function Trending() {
  const products = await DL.query.getTrending();

  return (
    <div>
      <HeaderTitle className="mb-6 border-b border-b-gray-300 text-lg font-semibold tracking-wide text-slate-700 dark:border-b-muted dark:text-white">
        Trending
      </HeaderTitle>
      <div className="overflow-auto customSm:flex customSm:max-h-[500px] customSm:w-full customSm:flex-col customSm:gap-2 600px:grid 600px:grid-cols-2 600px:gap-5">
        {products.map((product) => (
          <ProductMiniCard key={product.id} {...product} hideRating={true} />
        ))}
      </div>
    </div>
  );
}
