import ProductCard from "@/components/ProductCard";
import db from "@/lib/db";

export default async function NewArrivals() {
  const now = new Date();

  const oneWeekAgo = new Date(now);
  oneWeekAgo.setDate(now.getDate() - 7);

  const products = await db.product.findMany({
    where: {
      createdAt: {
        gte: oneWeekAgo,
      },
    },
  });

  return (
    <div>
      <h1 className="font-semibold text-slate-700 mb-6 text-lg border-b border-b-gray-300 tracking-wide">
        New Arrivals
      </h1>
      <div className="grid grid-cols-2 gap-2">
        {products.slice(0, 8).map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
