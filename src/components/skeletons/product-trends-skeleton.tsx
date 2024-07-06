import { Skeleton } from "@/components/ui/skeleton";

export default function ProductTrendsSkeleton() {
  return (
    <div>
      <Skeleton className="mb-6 ml-1 h-8 customSm:w-1/2 lg:w-[500px]" />
      <div className="grid overflow-auto customSm:max-h-[500px] customSm:grid-cols-1 customSm:gap-2 600px:grid-cols-2 600px:gap-4 md:gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <TrendingsSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

function TrendingsSkeleton() {
  return (
    <div className="flex gap-2 overflow-hidden">
      <Skeleton className="customSm:h-16 customSm:w-[80px] lg:h-20 lg:w-[120px]" />
      <div className="flex w-full flex-col justify-around">
        <Skeleton className="h-2" />
        <Skeleton className="h-2" />
        <Skeleton className="h-2" />
        <Skeleton className="h-2" />
      </div>
    </div>
  );
}
