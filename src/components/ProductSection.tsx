import CategoryAccordion from "./CategoryAccordion";
import * as React from "react";
import ProductsScrollContainer from "./ProductsScrollContainer";

export default function ProductSection() {
  return (
    <div className="flex gap-7">
      <CategoryAccordion />
      <ProductsScrollContainer />
    </div>
  );
}
