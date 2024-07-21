"use client";

import { Input } from "@/components/ui/input";
import { useCartStore } from "@/stores/cart-store";
import { CartQuantityInputProps } from "@/types";

export default function CartQuantityInput({
  id,
  quantity,
  stock,
}: CartQuantityInputProps) {
  const cartItemQuantity = useCartStore((state) => state.quantities[id]);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const currentQuantity = cartItemQuantity > stock ? stock : cartItemQuantity;

  return (
    <Input
      type="number"
      value={currentQuantity ?? quantity}
      onChange={(e) => updateQuantity(id, Number(e.target.value))}
      className="w-16 rounded-md border border-gray-300 text-center"
    />
  );
}
