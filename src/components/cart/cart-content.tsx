"use client";

import {
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartContentProps } from "@/types";
import CartItem from "@/components/cart/cart-item";
import { useSession } from "next-auth/react";
import Link from "next/link";
import NoCartItems from "@/components/cart/no-cart-items";

//can make this a server component later
export default function CartContent({ cartItems }: CartContentProps) {
  const session = useSession();
  const hasCartItems = cartItems.length > 0;
  return (
    <SheetContent className="overflow-auto p-3">
      {session.data?.user ? (
        <>
          <SheetHeader>
            <SheetTitle>Your Cart ({cartItems.length})</SheetTitle>
          </SheetHeader>
          <div className="grid grid-cols-1 gap-4 py-4">
            {hasCartItems ? (
              cartItems.map((item) => (
                <CartItem key={item.id} id={item.id} {...item.product} />
              ))
            ) : (
              <NoCartItems />
            )}
          </div>
          {hasCartItems && (
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Checkout</Button>
              </SheetClose>
            </SheetFooter>
          )}
        </>
      ) : (
        <Button
          asChild
          variant="ghost"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Link href="/signin">You must be logged in</Link>
        </Button>
      )}
    </SheetContent>
  );
}
