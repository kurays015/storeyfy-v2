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
      className="rounded-xl border-slate-300 dark:border-gray-700 lg:w-[250px] lg:border lg:p-5 xl:w-[300px]"
    >
      {categories.map(({ category, subCategories, logo }) => (
        <AccordionItem value={category} key={category} className="p-0">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-4">
              <Image src={logo} height={20} width={20} alt={category} />
              <div>{category}</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {subCategories.map((sub, index) => (
              <div key={index}>{sub}</div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
