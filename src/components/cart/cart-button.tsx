import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { IoCartOutline } from "react-icons/io5";
import Count from "@/components/count";
import CartContent from "@/components/cart/cart-content";
import { DL } from "@/data-layer";

export async function CartButton({ isAlreadyInTheCart }: any) {
  const cartItems = await DL.query.getCartItems();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          style={
            isAlreadyInTheCart
              ? { width: "100%" }
              : { all: "unset", position: "relative", cursor: "pointer" }
          }
        >
          {isAlreadyInTheCart ? (
            "Show cart"
          ) : (
            <>
              <Count count={cartItems.length} />
              <IoCartOutline />
            </>
          )}
        </Button>
      </SheetTrigger>
      <CartContent cartItems={cartItems} />
    </Sheet>
  );
}
