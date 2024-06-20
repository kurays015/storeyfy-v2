import db from "@/lib/db";
import ProductCard from "@/components/products/ProductCard";

export default async function MostSoldProductsGrid() {
  const products = await db.product.findMany({
    take: 12,
  });

  return (
    <div className="grid customSm:grid-cols-2 customSm:gap-2 600px:grid-cols-3 md:grid-cols-4 lg:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
