"use client";

import { cartTotalPrice } from "@/lib/cartTotalPrice";
import { useCartStore } from "@/stores/cart-store";
import { CartContentProps } from "@/types";

export default function CartTotal({ cartItems }: CartContentProps) {
  const quantities = useCartStore((state) => state.cartQuantities);

  return (
    <div className="mt-4 flex items-center justify-between dark:text-white">
      <h2 className="text-lg font-bold">Grand Total:</h2>
      <p className="text-lg font-bold">
        {cartTotalPrice(cartItems, quantities)}
      </p>
    </div>
  );
}
