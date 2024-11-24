import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Cart from "@/components/cart/cart";
import { DL } from "@/data-layer";
import CartAndCheckoutBtn from "@/components/cart/cart-or-checkout-btn";

export default async function CartContent() {
  const session = await DL.mutations.getSession();
  const cartCount = await DL.query.getCartItemsCount(session?.user.id);

  return (
    <SheetContent className="overflow-auto p-3">
      {!session ? (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          You must be logged in to view your cart
        </div>
      ) : (
        <>
          <SheetHeader>
            <SheetTitle>Your Cart ({cartCount})</SheetTitle>
            <SheetDescription>Enjoy shopping!</SheetDescription>
          </SheetHeader>
          <Cart />
          <CartAndCheckoutBtn href="/cart">Go to cart</CartAndCheckoutBtn>
        </>
      )}
    </SheetContent>
  );
}
