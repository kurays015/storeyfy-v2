import Cart from "@/components/cart-and-wishlist/cart/cart";
import { DL } from "@/data-layer";
import CartAndCheckoutBtn from "@/components/cart-and-wishlist/cart/cart-or-checkout-btn";
import CartTotal from "./cart-total";

export default async function CartContent() {
  const session = await DL.mutations.getSession();
  const cartItems = await DL.query.getUserCartItems(session?.user.id);

  return (
    <>
      <Cart />
      <CartTotal cartItems={cartItems} />
      <CartAndCheckoutBtn href="/cart">Go to cart</CartAndCheckoutBtn>
    </>
  );
}
