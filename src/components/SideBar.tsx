import CategoryAccordion from "@/components/CategoryAccordion";
import BestSellers from "@/components/products/BestSellers";

export default function SideBar() {
  return (
    <div className="flex flex-col gap-10">
      <CategoryAccordion />
      <BestSellers />
    </div>
  );
}
