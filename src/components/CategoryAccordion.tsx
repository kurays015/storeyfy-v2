import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categories } from "@/lib/categories";
import Image from "next/image";

export default function CategoryAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-[300px] p-5 rounded-xl border border-slate-300 dark:border-gray-700"
    >
      {categories.map(({ category, subCategory, logo }) => (
        <AccordionItem value={category} key={category} className="p-0">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-4">
              <Image
                src={logo}
                height={20}
                width={20}
                alt={category}
                // className="w-16"
              />
              <div>{category}</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {subCategory.map((sub, index) => (
              <div key={index}>{sub}</div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
