import { DL } from "@/data-layer";
import ProductCardGrid from "@/components/products/product-card-grid";
import NotFound from "@/components/not-found";

export default async function SearchResultContent({
  query,
}: {
  query: string;
}) {
  const searchResult = await DL.query.getSearchResult(query);

  if (!searchResult || !searchResult.length) return <NotFound />;

  return <ProductCardGrid products={searchResult} />;
}
