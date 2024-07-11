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

export default function CartContent({ cartItems }: CartContentProps) {
  const session = useSession();

  return (
    <SheetContent className="overflow-auto p-3">
      {session.data?.user ? (
        <>
          <SheetHeader>
            <SheetTitle>Your Cart ({cartItems.length})</SheetTitle>
          </SheetHeader>
          <div className="grid grid-cols-1 gap-4 py-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem key={item.id} {...item.product} />
              ))
            ) : (
              <div>No cart items...</div>
            )}
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Checkout</Button>
            </SheetClose>
          </SheetFooter>
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
