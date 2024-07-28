import { DL } from "@/data-layer";
import ProductCardGrid from "@/components/products/product-card-grid";

export default async function ProductByCategoryContent({
  category,
}: {
  category: string;
}) {
  const productByCategory = await DL.query.getProductByCategory(category);

  return <ProductCardGrid products={productByCategory} />;
}
