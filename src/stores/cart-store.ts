import { ProductProps } from "@/types";
import { create } from "zustand";

type State = {
  cartItems: ProductProps[];
};

type Actions = {
  addToCart: (product: ProductProps) => void;
  removeFromCart: (id: string) => void;
};

type CartStore = State & Actions;

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (product: ProductProps) =>
    set((state) => {
      return {};
    }),
  removeFromCart: (id: string) =>
    set((state) => {
      return {};
    }),
}));
