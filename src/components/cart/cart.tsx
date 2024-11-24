import { DL } from "@/data-layer";
import CartItem from "@/components/cart/cart-item";
import CartTotal from "@/components/cart/cart-total";
import NoCartItems from "@/components/cart/no-cart-items";

export default async function Cart() {
  const session = await DL.mutations.getSession();
  const cartItems = await DL.query.getUserCartItems(session?.user.id);

  return (
    <div className="grid grid-cols-1 gap-4">
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartId={item.id} {...item.product} />
          ))}
          <CartTotal cartItems={cartItems} />
        </>
      ) : (
        <NoCartItems />
      )}
    </div>
  );
}
