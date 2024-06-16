import { Skeleton } from "@/components/ui/skeleton";

export function ProductTrendsSkeleton() {
  return (
    <div>
      <Skeleton className="h-8 w-[280px] ml-1 mb-6" />
      <div className="grid grid-cols-2 gap-5">
        <TrendingsSkeleton />
        <TrendingsSkeleton />
        <TrendingsSkeleton />
        <TrendingsSkeleton />
        <TrendingsSkeleton />
        <TrendingsSkeleton />
        <TrendingsSkeleton />
        <TrendingsSkeleton />
      </div>
    </div>
  );
}

function TrendingsSkeleton() {
  return (
    <div className="flex gap-2 overflow-hidden">
      <Skeleton className="h-20 w-[80px]" />
      <div className="flex flex-col justify-around">
        <Skeleton className="h-2 w-[200px]" />
        <Skeleton className="h-2 w-[200px]" />
        <Skeleton className="h-2 w-[200px]" />
        <Skeleton className="h-2 w-[200px]" />
      </div>
    </div>
  );
}
