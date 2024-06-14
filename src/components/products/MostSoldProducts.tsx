import db from "@/lib/db";
import HeaderTitle from "@/components/HeaderTitle";
import ProductCard from "@/components/products/ProductCard";

export async function MostSoldProducts() {
  const products = await db.product.findMany({
    take: 12,
  });

  return (
    <div>
      <HeaderTitle className="font-semibold text-slate-700 mt-8 mb-6 text-lg border-b border-b-gray-300 tracking-wide">
        Most Sold Products
      </HeaderTitle>
      <div className="grid grid-cols-4 gap-5">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
