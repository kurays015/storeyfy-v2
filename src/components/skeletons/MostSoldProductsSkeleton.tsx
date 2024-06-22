import { Skeleton } from "@/components/ui/skeleton";

export function MostSoldProductsSkeleton() {
  return (
    <div className="grid gap-5 customSm:grid-cols-1 480px:grid-cols-2 600px:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="flex flex-col justify-evenly gap-2 overflow-hidden rounded-xl border p-4">
      <Skeleton className="h-36 w-full" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}
