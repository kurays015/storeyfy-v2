import { DL } from "@/data-layer";
import ProductCardGrid from "@/components/products/product-card-grid";

export default async function SearchResultContent({
  query,
}: {
  query: string;
}) {
  const searchResult = await DL.query.getSearchResult(query);

  if (!searchResult) return;

  return <ProductCardGrid products={searchResult} />;
}
