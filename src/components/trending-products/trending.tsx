import ProductMiniCard from "@/components/cards/product-mini-card";
import HeaderTitle from "@/components/header-title";
import { DL } from "@/data-layer";

export default async function Trending() {
  const products = await DL.query.getTrending();

  return (
    <div className="flex-shrink-0 flex-grow-0 basis-auto">
      <HeaderTitle className="mb-6 border-b border-b-gray-300 text-lg font-semibold tracking-wide text-slate-700 dark:border-b-muted dark:text-white">
        Trending
      </HeaderTitle>
      <div className="grid overflow-auto customSm:max-h-[500px] customSm:grid-cols-1 customSm:gap-2 600px:grid-cols-2 600px:gap-4 md:gap-6">
        {products.map((product) => (
          <ProductMiniCard key={product.id} {...product} hideRating={true} />
        ))}
      </div>
    </div>
  );
}
