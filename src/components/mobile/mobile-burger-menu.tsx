import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CategoryAccordion from "@/components/category-accordion";
import MobileLogout from "@/components/mobile/mobile-logout";
import { getSession } from "@/lib/auth";

export default async function MobileBurgerMenu() {
  const session = await getSession();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent p-0 hover:bg-transparent">
          <RxHamburgerMenu className="text-2xl text-black" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-4 lg:hidden">
        <SheetHeader>
          <SheetTitle className="mb-12 border-b text-start">Menu</SheetTitle>
        </SheetHeader>
        <div>
          <CategoryAccordion />
          {session?.user && <MobileLogout />}
        </div>
      </SheetContent>
    </Sheet>
  );
}
