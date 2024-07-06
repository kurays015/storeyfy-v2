import { DL } from "@/data-layer";
import ProductCardGrid from "@/components/products/product-card-grid";

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

  if (!recommendedProducts) return;

  return <ProductCardGrid products={recommendedProducts} />;
}
