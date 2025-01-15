import { ServerAction } from "@/types";
import AddToCartAndWishListBtn from "./addtocart-and-wishlist";

export default function SaveToDBForm({
  serverAction,
  buttonText,
}: {
  serverAction: ServerAction;
  buttonText: string;
}) {
  return (
    <form className="w-full" action={serverAction}>
      <AddToCartAndWishListBtn buttonText={buttonText} />
    </form>
  );
}
