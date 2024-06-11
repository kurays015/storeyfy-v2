import ProductCard from "@/components/products/ProductCard";
import db from "@/lib/db";

export default async function TopRated() {
  const products = await db.product.findMany({
    where: {
      discount: {
        lte: 20,
      },
    },
  });

  return (
    <div>
      <h1 className="font-semibold text-slate-700 mb-6 text-lg border-b border-b-gray-300 tracking-wide">
        Top Rated
      </h1>
      <div className="grid grid-cols-2 gap-5">
        {products.slice(0, 8).map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
