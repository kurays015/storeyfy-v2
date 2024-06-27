import CategoryAccordion from "@/components/CategoryAccordion";
import BestSellers from "@/components/products/BestSellers";
import { Suspense } from "react";
import BestSellersSkeleton from "@/components/skeletons/BestSellersSkeleton";

export default function SideBar() {
  return (
    <div className="customSm:hidden lg:sticky lg:top-8 lg:flex lg:h-screen lg:flex-col lg:gap-5">
      <CategoryAccordion />
      <Suspense fallback={<BestSellersSkeleton />}>
        <BestSellers />
      </Suspense>
    </div>
  );
}
