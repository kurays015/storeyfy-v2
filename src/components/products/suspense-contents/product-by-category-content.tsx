import { DL } from "@/data-layer";
import ProductCardGrid from "@/components/products/product-card-grid";
import NotFound from "@/components/not-found";

export default async function ProductByCategoryContent({
  category,
}: {
  category: string;
}) {
  const productByCategory = await DL.query.getProductByCategory(category);

  if (!productByCategory || !productByCategory.length) return <NotFound />;

  return <ProductCardGrid products={productByCategory} />;
}
