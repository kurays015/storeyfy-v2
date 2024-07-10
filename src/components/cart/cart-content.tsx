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

export default function CartContent({ cartItems }: CartContentProps) {
  return (
    <SheetContent className="overflow-auto p-3">
      <SheetHeader>
        <SheetTitle>Your Cart ({cartItems.length})</SheetTitle>
      </SheetHeader>
      <div className="grid grid-cols-1 gap-4 py-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} {...item.product} />)
        ) : (
          <div>No cart items...</div>
        )}
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Checkout</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}
