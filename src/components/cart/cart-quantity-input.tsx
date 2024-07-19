"use client";

import { Input } from "@/components/ui/input";
import { useCartStore } from "@/stores/cart-store";
import { CartQuantityInputProps } from "@/types";
import { ChangeEvent } from "react";

export default function CartQuantityInput({
  id,
  quantity,
  stock,
}: CartQuantityInputProps) {
  const cartItemQuantity = useCartStore((state) => state.quantities[id]);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const availableQuantityStock =
    cartItemQuantity > stock ? stock : cartItemQuantity;

  const displayQuantity = availableQuantityStock ?? quantity ?? 1;

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Check if the input value is a valid number
    if (!/^\d*$/.test(value)) {
      return;
    }

    const newQuantity = Number(value);

    updateQuantity(id, newQuantity);
  };

  return (
    <Input
      type="text"
      value={displayQuantity}
      onChange={handleQuantityChange}
      className="w-16 rounded-md border border-gray-300 text-center"
    />
  );
}
