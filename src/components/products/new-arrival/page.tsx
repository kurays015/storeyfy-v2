import db from "@/lib/db";
import ProductMiniCard from "@/components/products/ProductMiniCard";
import HeaderTitle from "@/components/HeaderTitle";

export default async function NewArrivals() {
  const now = new Date();

  const oneWeekAgo = new Date(now);
  oneWeekAgo.setDate(now.getDate() - 30);

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
      <HeaderTitle className="font-semibold text-slate-700 mb-6 text-lg border-b border-b-gray-300 tracking-wide dark:text-white dark:border-b-muted">
        New Arrivals
      </HeaderTitle>
      <div className="grid grid-cols-2 gap-5">
        {products.map(product => (
          <ProductMiniCard
            key={product.id}
            {...product}
            hasBorder={true}
            hideRating={true}
          />
        ))}
      </div>
    </div>
  );
}
