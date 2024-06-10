import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import NewArrivals from "@/components/products/new-arrival/page";
import Trending from "@/components/products/trending/page";
import TopRated from "@/components/products/top-rated/page";

export default function ProductsScrollContainer() {
  return (
    <ScrollArea className="whitespace-nowrap border p-4">
      <div className="flex gap-10 w-max">
        <NewArrivals />
        <Trending />
        <TopRated />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
