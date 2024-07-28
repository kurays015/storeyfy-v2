import CategoryAccordion from "@/components/category-accordion";
import BestSellers from "@/components/products/best-seller";
import { Suspense } from "react";
import BestSellersSkeleton from "@/components/skeletons/best-sellers-skeleton";

export default function SideBar() {
  console.log("rendering");
  return (
    <div className="customSm:hidden lg:sticky lg:top-8 lg:flex lg:h-screen lg:flex-col lg:gap-5">
      <CategoryAccordion />
      <Suspense fallback={<BestSellersSkeleton />}>
        <BestSellers />
      </Suspense>
    </div>
  );
}
