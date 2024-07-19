import { addToCart } from "@/app/product/_actions/action";
import AddToCartBtn from "@/components/cart/add-to-cart-btn";
import { CartFormProps } from "@/types";

export default function AddToCartForm({ id, title }: CartFormProps) {
  return (
    <form className="w-full" action={addToCart.bind(null, id, title)}>
      <AddToCartBtn />
    </form>
  );
}
