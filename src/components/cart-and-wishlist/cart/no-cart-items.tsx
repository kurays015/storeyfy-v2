import emptyCart from "../../../../public/emptycart.png";
import Image from "next/image";

export default function NoCartItems() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Image
        src={emptyCart}
        width={100}
        height={100}
        alt="empty-cart-img"
        placeholder="blur"
      />
      <p className="mt-2 text-sm">Your cart is empty...</p>
    </div>
  );
}
