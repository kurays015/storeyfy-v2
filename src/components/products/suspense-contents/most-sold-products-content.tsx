import { DL } from "@/data-layer";
import ProductCardGrid from "@/components/products/product-card-grid";
import NotFound from "@/components/not-found";

export default async function MostSoldProductsContent() {
  const mostSoldProducts = await DL.query.getMostSoldProducts();

  if (!mostSoldProducts || !mostSoldProducts.length) return <NotFound />;

  return <ProductCardGrid products={mostSoldProducts} />;
}
