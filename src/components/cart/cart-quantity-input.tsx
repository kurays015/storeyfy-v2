"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";
import { CartQuantityInputProps } from "@/types";

export default function CartQuantityInput({
  id,
  stock,
}: CartQuantityInputProps) {
  const cartItemQuantity = useCartStore(
    (state) => state.cartQuantities[id] ?? 1,
  );
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // Only allow numeric input
    if (/^\d*$/.test(e.target.value)) {
      const qty = value > stock ? stock : value;
      updateQuantity(id, qty);
    }
  };

  const handleIncrement = () => {
    if (cartItemQuantity < stock) {
      updateQuantity(id, cartItemQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (cartItemQuantity > 1) {
      updateQuantity(id, cartItemQuantity - 1);
    }
  };

  return (
    <div className="flex items-center">
      <Button className="rounded-none" onClick={handleDecrement}>
        -
      </Button>
      <Input
        type="text"
        value={cartItemQuantity}
        onChange={handleChange}
        className="w-10 rounded-none border-gray-300 text-center ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button className="rounded-none" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
}
