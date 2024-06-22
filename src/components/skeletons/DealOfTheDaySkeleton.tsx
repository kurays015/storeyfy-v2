import { Skeleton } from "@/components/ui/skeleton";

export function DealOfTheDaySkeleton() {
  return (
    <div className="flex w-full rounded-xl border px-8 py-5 customSm:flex-col customSm:gap-4 md:flex-row md:gap-8">
      <Skeleton className="customSm:h-52 600px:h-64 md:h-96 md:w-1/2" />
      <div className="flex flex-1 flex-col justify-between customSm:gap-2 600px:gap-4 md:gap-0">
        <Skeleton className="h-6 w-2/5" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6 w-2/5" />
        <Skeleton className="h-10" />
        <Skeleton className="h-6 w-2/5" />

        <Skeleton className="h-10" />

        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-2/5" />
          <Skeleton className="h-6 w-2/5" />
        </div>
        <div className="text-center">
          <div className="mb-2 text-sm font-semibold text-black dark:text-slate-300">
            HURRY UP! OFFER ENDS IN:
          </div>
          <Skeleton className="h-16" />
        </div>
      </div>
    </div>
  );
}
