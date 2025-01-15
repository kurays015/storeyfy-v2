import { Suspense } from "react";
import ProductCardGridSkeleton from "@/components/skeletons/product-card-grid-skeleton";
import HeaderTitle from "@/components/header-title";
import SearchResultContent from "@/components/products/suspense-contents/search-result-content";
import { Metadata } from "next";
import { DL } from "@/data-layer";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { query: string };
}): Promise<Metadata> {
  const result = await DL.query.getSearchResult(searchParams?.query);

  if (!result.length) return { title: "Product not found" };

  return {
    title: `Search results for ${searchParams?.query}`,
    description: `Search results for ${searchParams?.query}`,
  };
}

export default function ProductBySearch({
  searchParams: { query },
}: {
  searchParams: { query: string };
}) {
  return (
    <div>
      <HeaderTitle className="mb-6 border-b text-lg font-semibold tracking-wide text-slate-700 dark:text-white">
        Searching for {query ? query : "..."}
      </HeaderTitle>
      <Suspense key={query} fallback={<ProductCardGridSkeleton />}>
        <SearchResultContent query={query} />
      </Suspense>
    </div>
  );
}
