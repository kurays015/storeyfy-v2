import { Quantity } from "@/types";
import { create } from "zustand";

type State = {
  quantities: Quantity;
};

type Actions = {
  updateQuantity: (id: string, quantity: number) => void;
};

type CartStore = State & Actions;

export const useCartStore = create<CartStore>((set) => ({
  quantities: {},
  updateQuantity: (id: string, quantity: number) =>
    set((state) => {
      // if (quantity < 1) return {};

      return {
        quantities: { ...state.quantities, [id]: quantity ?? 1 },
      };
    }),
}));
