import CategoryAccordion from "@/components/CategoryAccordion";
import BestSellers from "@/components/products/BestSellers";
import { Suspense } from "react";
import { BestSellersSkeleton } from "@/components/skeletons/BestSellersSkeleton";

export default function SideBar() {
  return (
    <div className="flex flex-col gap-10 sticky top-8 h-screen">
      <CategoryAccordion />
      <Suspense fallback={<BestSellersSkeleton />}>
        <BestSellers />
      </Suspense>
    </div>
  );
}
