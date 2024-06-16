import { Skeleton } from "@/components/ui/skeleton";

export function MostSoldProductsSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {Array.from({ length: 12 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="flex flex-col justify-evenly gap-2 rounded-xl border overflow-hidden p-4">
      <Skeleton className="h-36 w-full" />

      <Skeleton className="h-4 w-1/2" />

      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}
