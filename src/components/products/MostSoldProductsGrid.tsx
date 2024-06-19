import db from "@/lib/db";
import ProductCard from "@/components/products/ProductCard";

export default async function MostSoldProductsGrid() {
  const products = await db.product.findMany({
    take: 12,
  });

  return (
    <div className="grid gap-6 customSm:grid-cols-1 480px:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
