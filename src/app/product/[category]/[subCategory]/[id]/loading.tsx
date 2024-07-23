import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="h-96 w-full" />
      <Skeleton className="h-24 w-full" />
    </div>
  );
}
