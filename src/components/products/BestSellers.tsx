import db from "@/lib/db";
import ProductMiniCard from "@/components/products/ProductMiniCard";
import HeaderTitle from "@/components/HeaderTitle";

export default async function BestSellers() {
  const products = await db.product.findMany({
    where: {
      discount: {
        gte: 25,
      },
    },
    take: 4,
  });

  return (
    <div>
      <HeaderTitle className="uppercase text-slate-700 font-semibold text-base mb-3">
        Best Sellers
      </HeaderTitle>
      <div className="flex flex-col gap-2">
        {products.map(product => (
          <ProductMiniCard key={product.id} {...product} hasBorder={false} />
        ))}
      </div>
    </div>
  );
}
