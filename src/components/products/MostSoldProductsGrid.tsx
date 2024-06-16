import db from "@/lib/db";
import ProductCard from "@/components/products/ProductCard";

export default async function MostSoldProductsGrid() {
  const products = await db.product.findMany({
    take: 12,
  });

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
