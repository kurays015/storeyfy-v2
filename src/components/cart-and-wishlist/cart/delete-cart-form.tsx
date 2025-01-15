import { deleteItemToCart } from "@/app/product/_actions/action";
import DeleteCartItemBtn from "@/components/cart-and-wishlist/cart/delete-cart-item-btn";
import { CartFormProps } from "@/types";

export default function DeleteCartForm({ id, title }: CartFormProps) {
  return (
    <form action={deleteItemToCart.bind(null, id, title)}>
      <DeleteCartItemBtn />
    </form>
  );
}
