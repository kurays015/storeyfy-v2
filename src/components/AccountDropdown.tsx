import { CgProfile } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import AccountDropdownContent from "@/components/AccountDropdownContent";

export default function AccountDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="border-none bg-transparent p-0 hover:bg-transparent">
          <CgProfile className="text-3xl text-gray-600 dark:text-white" />
        </Button>
      </DropdownMenuTrigger>
      <AccountDropdownContent />
    </DropdownMenu>
  );
}
