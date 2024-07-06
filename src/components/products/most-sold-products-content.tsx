import { DL } from "@/data-layer";
import ProductCardGrid from "@/components/products/product-card-grid";

export default async function MostSoldProductsContent() {
  const mostSoldProducts = await DL.query.getMostSoldProducts();

  return <ProductCardGrid products={mostSoldProducts} />;
}
