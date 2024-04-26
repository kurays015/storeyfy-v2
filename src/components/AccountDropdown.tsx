"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { IoIosLogOut } from "react-icons/io";

export default function AccountDropdown() {
  const { data: session } = useSession();

  const getUserName = () => {
    if (session?.user?.email) {
      return session.user.email.split("@")[0];
    } else {
      return session?.user?.name;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button style={{ all: "unset", cursor: "pointer" }}>
          {getUserName()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-3">
        <DropdownMenuCheckboxItem
          className="cursor-pointer"
          onClick={() => signOut()}
        >
          <IoIosLogOut className="text-xl mr-2" />
          Logout
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
