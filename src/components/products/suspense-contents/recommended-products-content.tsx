import { DL } from "@/data-layer";
import ProductCardGrid from "@/components/products/product-card-grid";
import NotFound from "@/components/not-found";

export default async function RecommendedProductsContent({
  category,
  id,
}: {
  category: string;
  id: string;
}) {
  const recommendedProducts = await DL.query.getRecommendedProducts(
    category,
    id,
  );

  if (!recommendedProducts || !recommendedProducts.length) return <NotFound />;

  return <ProductCardGrid products={recommendedProducts} />;
}
