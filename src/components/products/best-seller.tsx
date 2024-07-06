import ProductMiniCard from "@/components/products/product-mini-card";
import HeaderTitle from "@/components/header-title";
import { DL } from "@/data-layer";

export default async function BestSellers() {
  const products = await DL.query.getBestSellers();

  return (
    <div>
      <HeaderTitle className="mb-3 text-base font-semibold uppercase text-slate-700 dark:text-white">
        Best Sellers
      </HeaderTitle>
      <div className="flex flex-col gap-2">
        {products.map((product) => (
          <ProductMiniCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
