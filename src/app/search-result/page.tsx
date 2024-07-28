import { Suspense } from "react";
import ProductCardGridSkeleton from "@/components/skeletons/product-card-grid-skeleton";
import HeaderTitle from "@/components/header-title";
import SearchResultContent from "@/components/products/suspense-contents/search-result-content";

export default function ProductBySearch({
  searchParams: { query },
}: {
  searchParams: { query: string };
}) {
  return (
    <div>
      <HeaderTitle className="mb-6 border-b text-lg font-semibold tracking-wide text-slate-700 dark:text-white">
        Searching for {query}
      </HeaderTitle>
      <Suspense key={query} fallback={<ProductCardGridSkeleton />}>
        <SearchResultContent query={query} />
      </Suspense>
    </div>
  );
}
