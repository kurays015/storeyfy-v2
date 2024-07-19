"use client";

import { cartTotalPrice } from "@/lib/cartTotalPrice";
import { useCartStore } from "@/stores/cart-store";
import { CartContentProps } from "@/types";

export default function CartTotal({ cartItems }: CartContentProps) {
  const quantity = useCartStore((state) => state.quantities);
  return <div>Total: {cartTotalPrice(cartItems, quantity)}</div>;
}
