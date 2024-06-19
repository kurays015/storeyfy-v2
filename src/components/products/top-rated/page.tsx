import ProductMiniCard from "@/components/products/ProductMiniCard";
import db from "@/lib/db";
import HeaderTitle from "@/components/HeaderTitle";

export default async function TopRated() {
  const products = await db.product.findMany({
    where: {
      discount: {
        lte: 20,
      },
    },
    take: 8,
  });

  return (
    <div>
      <HeaderTitle className="font-semibold text-slate-700 mb-6 text-lg border-b border-b-gray-300 tracking-wide dark:text-white dark:border-b-muted">
        Top Rated
      </HeaderTitle>
      <div className="customSm:flex customSm:flex-col customSm:max-h-[500px] customSm:w-full customSm:gap-2 overflow-auto 600px:grid 600px:grid-cols-2 600px:gap-5">
        {products.map(product => (
          <ProductMiniCard key={product.id} {...product} hideRating={true} />
        ))}
      </div>
    </div>
  );
}
