import { Skeleton } from "@/components/ui/skeleton";

export function DealOfTheDaySkeleton() {
  return (
    <div className="rounded-xl border py-5 px-8 flex gap-8">
      <Skeleton className="h-96 w-1/2" />
      <div className="flex flex-col justify-between flex-1">
        <Skeleton className="h-6 w-2/5" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6 w-2/5" />
        <Skeleton className="h-10" />
        <Skeleton className="h-6 w-2/5" />

        <Skeleton className="h-10" />

        <div className="flex items-center justify-between ">
          <Skeleton className="h-6 w-2/5" />
          <Skeleton className="h-6 w-2/5" />
        </div>
        <div className="text-center">
          <div className="text-black text-sm font-semibold mb-2">
            HURRY UP! OFFER ENDS IN:
          </div>
          <Skeleton className="h-16" />
        </div>
      </div>
    </div>
  );
}
