"use client";

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { CgProfile } from "react-icons/cg";
import { CiShoppingBasket } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import NavLinkMenu from "./nav-link-menu";

export default function AccountDropdownContent() {
  return (
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Products</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <NavLinkMenu href="/my-products">
          <DropdownMenuItem className="cursor-pointer">
            <CiShoppingBasket className="mr-2 h-4 w-4" />
            <span>My Products</span>
          </DropdownMenuItem>
        </NavLinkMenu>
        <NavLinkMenu href="/my-orders">
          <DropdownMenuItem className="cursor-pointer">
            <IoBagHandleOutline className="mr-2 h-4 w-4" />
            <span>My Orders</span>
          </DropdownMenuItem>
        </NavLinkMenu>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />

      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <NavLinkMenu href="/my-profile">
          <DropdownMenuItem className="cursor-pointer">
            <CgProfile className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
        </NavLinkMenu>
        <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
    </DropdownMenuContent>
  );
}
