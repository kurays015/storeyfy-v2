import HeaderTitle from "@/components/header-title";
import Cart from "@/components/cart-and-wishlist/cart/cart";
import CartAndCheckoutBtn from "@/components/cart-and-wishlist/cart/cart-or-checkout-btn";
import { DL } from "@/data-layer";
import CartTotal from "@/components/cart-and-wishlist/cart/cart-total";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "cart page",
};

export default async function CartPage() {
  const session = await DL.mutations.getSession();

  const [cartCount, cartItems] = await Promise.all([
    DL.query.getCartItemsCount(session?.user.id),
    await DL.query.getUserCartItems(session?.user.id),
  ]);

  const isOutOfStock = cartItems.every((item) => item.product.stock === 0);

  return (
    <main className="relative p-8 xl:container customSm:min-h-[60vh] customSm:px-4 md:mx-auto md:max-w-3xl lg:min-h-[75vh] lg:max-w-7xl">
      <HeaderTitle className="mb-8 text-2xl font-bold text-slate-800 dark:text-muted-foreground">
        My Cart ({cartCount})
      </HeaderTitle>
      <Cart />
      <CartTotal cartItems={cartItems} />
      <CartAndCheckoutBtn href="/checkout" isOutOfStock={isOutOfStock}>
        Checkout
      </CartAndCheckoutBtn>
    </main>
  );
}
