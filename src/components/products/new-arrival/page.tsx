import ProductMiniCard from "@/components/products/ProductMiniCard";
import db from "@/lib/db";
import ProductHeaderTitle from "@/components/products/ProductHeaderTitle";

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
    take: 8,
  });

  return (
    <div>
      <ProductHeaderTitle className="font-semibold text-slate-700 mb-6 text-lg border-b border-b-gray-300 tracking-wide">
        New Arrivals
      </ProductHeaderTitle>
      <div className="grid grid-cols-2 gap-5">
        {products.map(product => (
          <ProductMiniCard key={product.id} {...product} hasBorder={true} />
        ))}
      </div>
    </div>
  );
}
