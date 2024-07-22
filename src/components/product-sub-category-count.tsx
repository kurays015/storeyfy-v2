import { DL } from "@/data-layer";

export default async function ProductSubCategoryCount({
  subCategory,
}: {
  subCategory: string;
}) {
  const count = await DL.query.getProductCountBySubCategory(subCategory);

  return <div className="font-semibold">{count}</div>;
}
