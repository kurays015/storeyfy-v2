import db from "@/lib/db";
import ProductCard from "@/components/products/ProductCard";

export default async function BestSellers() {
  const products = await db.product.findMany({
    where: {
      discount: {
        gte: 25,
      },
    },
  });

  return (
    <div>
      <h1 className="uppercase text-slate-700 font-semibold text-base mb-3">
        Best Sellers
      </h1>
      <div className="flex flex-col gap-2">
        {products.slice(0, 4).map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
