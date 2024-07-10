// import { create } from "zustand";

//zustand usage

// type Products = {
//   id: number;
//   name: string;
//   price: number;
// };

// type State = {
//   cartItems: Products[];
// };

// type Actions = {
//   addToCart: (products: Products) => void;
//   removeFromCart: (id: number) => void;
// };

// const useCartStore = create<State & Actions>((set) => ({
//   cartItems: [],
//   addToCart: (product: Products) =>
//     set((state) => {
//       const existingProduct = state.cartItems.find(
//         (item) => item.id === product.id,
//       );

//       if (existingProduct) return {};

//       return {
//         cartItems: [
//           ...state.cartItems,
//           { id: product.id, name: product.name, price: product.price },
//         ],
//       };
//     }),
//   removeFromCart: (id: number) =>
//     set((state) => ({
//       cartItems: state.cartItems.filter((item) => item.id !== id),
//     })),
// }));

export default function ExperimentPage() {
  // const addToCart = useCartStore((state) => state.addToCart);
  // const cartItems = useCartStore((state) => state.cartItems);
  // const removeFromCart = useCartStore((state) => state.removeFromCart);

  // const products = [
  //   {
  //     id: 1,
  //     name: "Jacket",
  //     price: 5,
  //   },
  //   {
  //     id: 2,
  //     name: "Shampoo",
  //     price: 10,
  //   },
  //   {
  //     id: 3,
  //     name: "Black Shoe",
  //     price: 15,
  //   },
  // ];

  return <div>ExperimentPage</div>;
}
