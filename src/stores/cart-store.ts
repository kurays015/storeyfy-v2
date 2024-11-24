import { Quantity } from "@/types";
import { create } from "zustand";

type State = {
  cartQuantities: Quantity;
};

type Actions = {
  updateQuantity: (id: string, quantity: number) => void;
};

type CartStore = State & Actions;

export const useCartStore = create<CartStore>((set) => ({
  cartQuantities: {},

  updateQuantity: (id: string, quantity: number) =>
    set((state) => {
      return {
        cartQuantities: { ...state.cartQuantities, [id]: quantity },
      };
    }),
}));
