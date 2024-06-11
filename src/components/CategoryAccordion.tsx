import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categories } from "@/lib/categories";

export default function CategoryAccordion() {
  return (
    // <div>
    <Accordion
      type="single"
      collapsible
      className="w-[300px] p-5 rounded-xl border border-slate-300 dark:border-gray-700"
    >
      {categories.map(({ category, subCategory }) => (
        <AccordionItem value={category} key={category}>
          <AccordionTrigger>{category}</AccordionTrigger>
          <AccordionContent>
            {subCategory.map((sub, index) => (
              <div key={index}>{sub}</div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    // </div>
  );
}
