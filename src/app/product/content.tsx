import CartContent from "@/components/cart-and-wishlist/cart/cart-content";
import WishListContent from "@/components/cart-and-wishlist/wishlist/wishlist-content";
import { DL } from "@/data-layer";

export default async function Content({ isWishList }: { isWishList: boolean }) {
  const session = await DL.mutations.getSession();
  if (!session)
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        You must be logged in to view your cart
      </div>
    );

  return <div>{isWishList ? <WishListContent /> : <CartContent />}</div>;
}
