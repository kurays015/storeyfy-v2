import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartContentProps } from "@/types";
import CartItem from "@/components/cart/cart-item";
import Link from "next/link";
import NoCartItems from "@/components/cart/no-cart-items";
import CartTotal from "./cart-total";
import React from "react";
import { DL } from "@/data-layer";

export default async function CartContent({ cartItems }: CartContentProps) {
  const session = await DL.mutations.getSession();
  const hasCartItems = cartItems.length > 0;
  return (
    <SheetContent className="overflow-auto p-3">
      {session?.user ? (
        <>
          <SheetHeader>
            <SheetTitle>Your Cart ({cartItems.length})</SheetTitle>
            <SheetDescription>Enjoy shopping!</SheetDescription>
          </SheetHeader>
          <div className="grid grid-cols-1 gap-4 py-4">
            {hasCartItems ? (
              <>
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} {...item.product} />
                ))}
                <CartTotal cartItems={cartItems} />
              </>
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
