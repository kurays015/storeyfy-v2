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
        <Button variant="outline" style={{ all: "unset", cursor: "pointer" }}>
          <CgProfile />
        </Button>
      </DropdownMenuTrigger>
      <AccountDropdownContent />
    </DropdownMenu>
  );
}
