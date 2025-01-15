import { DL } from "@/data-layer";
import CartItem from "@/components/cart-and-wishlist/cart/cart-item";
import NoCartItems from "@/components/cart-and-wishlist/cart/no-cart-items";

export default async function Cart() {
  const session = await DL.mutations.getSession();
  const [cartCount, cartItems] = await Promise.all([
    DL.query.getCartItemsCount(session?.user.id),
    DL.query.getUserCartItems(session?.user.id),
  ]);

  return (
    <div className="scrollbar-gray grid max-h-[500px] grid-cols-1 gap-4 overflow-auto">
      {cartCount > 0 ? (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartId={item.id} {...item.product} />
          ))}
        </>
      ) : (
        <NoCartItems />
      )}
    </div>
  );
}
