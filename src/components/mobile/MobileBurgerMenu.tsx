import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CategoryAccordion from "@/components/CategoryAccordion";
import MobileLogout from "@/components/mobile/MobileLogout";

export default function MobileBurgerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" style={{ all: "unset", cursor: "pointer" }}>
          <RxHamburgerMenu className="text-2xl text-black" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-4 lg:hidden">
        <SheetHeader>
          <SheetTitle className="mb-12 border-b text-start">Menu</SheetTitle>
        </SheetHeader>
        <div>
          <CategoryAccordion />
          <MobileLogout />
        </div>
      </SheetContent>
    </Sheet>
  );
}
