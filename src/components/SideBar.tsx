import CategoryAccordion from "@/components/CategoryAccordion";
import BestSellers from "@/components/products/BestSellers";

export default function SideBar() {
  return (
    <div className="flex flex-col gap-10 sticky top-8 h-screen">
      <CategoryAccordion />
      <BestSellers />
    </div>
  );
}
