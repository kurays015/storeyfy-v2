import * as React from "react";
import CategoryAccordion from "@/components/CategoryAccordion";
import ProductsScrollContainer from "@/components/ProductsScrollContainer";

export default function ProductSection() {
  return (
    <div className="flex gap-7">
      <CategoryAccordion />
      <ProductsScrollContainer />
    </div>
  );
}
