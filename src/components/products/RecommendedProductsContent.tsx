import { DL } from "@/data-layer";
import ProductCardGrid from "@/components/products/ProductCardGrid";

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

  return <ProductCardGrid products={recommendedProducts} />;
}
