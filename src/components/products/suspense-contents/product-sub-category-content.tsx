import { DL } from "@/data-layer";
import ProductCardGrid from "@/components/products/product-card-grid";
import NotFound from "@/components/not-found";

export default async function ProductBySubCategoryContent({
  subCategory,
}: {
  subCategory: string;
}) {
  const productBySubCategory =
    await DL.query.getProductBySubCategory(subCategory);

  if (!productBySubCategory || !productBySubCategory.length)
    return <NotFound />;

  return <ProductCardGrid products={productBySubCategory} />;
}
