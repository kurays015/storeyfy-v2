import db from "@/lib/db";
import ProductCard from "./ProductCard";

export default async function Products() {
  const products = await db.product.findMany();

  return (
    <div className="grid grid-cols-3 gap-5">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
