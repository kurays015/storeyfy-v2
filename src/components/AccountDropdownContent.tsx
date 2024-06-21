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
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";

export default function AccountDropdownContent() {
  return (
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Products</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <Link href="/my-products">
          <DropdownMenuItem className="cursor-pointer">
            <CiShoppingBasket className="mr-2 h-4 w-4" />
            <span>My Products</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <IoCartOutline className="mr-2 h-4 w-4" />
          <span>Cart</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IoBagHandleOutline className="mr-2 h-4 w-4" />
          <span>Orders</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />

      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <CgProfile className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
    </DropdownMenuContent>
  );
}
