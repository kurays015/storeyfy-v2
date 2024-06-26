import ProductCard from "@/components/products/ProductCard";
import { ProductProps } from "@/types";

export default async function ProductCardGrid({
  products,
}: {
  products: ProductProps[];
}) {
  return (
    <div className="grid customSm:grid-cols-2 customSm:gap-2 600px:grid-cols-3 md:grid-cols-4 lg:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
