import { DL } from "@/data-layer";
import ProductCardGrid from "@/components/products/product-card-grid";

export default async function ProductBySubCategoryContent({
  subCategory,
}: {
  subCategory: string;
}) {
  const productBySubCategory =
    await DL.query.getProductBySubCategory(subCategory);

  return <ProductCardGrid products={productBySubCategory} />;
}
