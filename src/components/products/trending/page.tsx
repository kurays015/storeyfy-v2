import ProductMiniCard from "@/components/products/ProductMiniCard";
import db from "@/lib/db";
import HeaderTitle from "@/components/HeaderTitle";

export default async function Trending() {
  const products = await db.product.findMany({
    where: {
      discount: {
        gte: 20,
      },
    },
    take: 8,
  });

  return (
    <div>
      <HeaderTitle className="font-semibold text-slate-700 mb-6 text-lg border-b border-b-gray-300 tracking-wide">
        Trending
      </HeaderTitle>
      <div className="grid grid-cols-2 gap-5">
        {products.map(product => (
          <ProductMiniCard key={product.id} {...product} hasBorder={true} />
        ))}
      </div>
    </div>
  );
}
