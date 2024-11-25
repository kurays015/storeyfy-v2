import HeaderTitle from "@/components/header-title";
import Cart from "@/components/cart/cart";
import CartAndCheckoutBtn from "@/components/cart/cart-or-checkout-btn";
import { DL } from "@/data-layer";
import CartTotal from "@/components/cart/cart-total";

export default async function CartPage() {
  const session = await DL.mutations.getSession();

  const [cartCount, cartItems] = await Promise.all([
    DL.query.getCartItemsCount(session?.user.id),
    await DL.query.getUserCartItems(session?.user.id),
  ]);

  const isOutOfStock = cartItems.every((item) => item.product.stock === 0);

  return (
    <main className="min-h-screen p-8 xl:container customSm:px-4 md:mx-auto md:max-w-3xl lg:max-w-7xl">
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
