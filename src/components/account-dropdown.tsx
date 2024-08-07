import { CgProfile } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AccountDropdownContent from "@/components/account-dropdown-content";

export default function AccountDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button style={{ all: "unset", cursor: "pointer" }}>
          <CgProfile className="text-3xl text-black dark:text-white" />
        </Button>
      </DropdownMenuTrigger>
      <AccountDropdownContent />
    </DropdownMenu>
  );
}
