import { Skeleton } from "@/components/ui/skeleton";

export function BestSellersSkeleton() {
  return (
    <div>
      <Skeleton className="mb-6 ml-1 h-6 w-[280px] bg-gray-400" />
      <div className="flex flex-col gap-2">
        <Skeletons />
        <Skeletons />
        <Skeletons />
        <Skeletons />
      </div>
    </div>
  );
}

function Skeletons() {
  return (
    <div className={`flex gap-2 overflow-hidden`}>
      <Skeleton className="h-20 w-[80px] bg-gray-400" />
      <div className="flex flex-col justify-evenly">
        <Skeleton className="h-2 w-[200px] bg-gray-400" />
        <Skeleton className="h-2 w-[200px] bg-gray-400" />
        <Skeleton className="h-2 w-[200px] bg-gray-400" />
        <Skeleton className="h-2 w-[200px] bg-gray-400" />
      </div>
    </div>
  );
}
