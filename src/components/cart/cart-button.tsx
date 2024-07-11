import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { IoCartOutline } from "react-icons/io5";
import Count from "@/components/count";
import CartContent from "@/components/cart/cart-content";
import { DL } from "@/data-layer";
import { getSession } from "@/lib/auth";

export async function CartButton({
  isAlreadyInTheCart,
}: {
  isAlreadyInTheCart?: boolean;
}) {
  const session = await getSession();

  const cartItems = await DL.query.getCartItems(session?.user.id);

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
              <Count count={!session ? 0 : cartItems.length} />
              <IoCartOutline className="customSm:text-2xl lg:text-3xl" />
            </>
          )}
        </Button>
      </SheetTrigger>
      <CartContent cartItems={cartItems} />
    </Sheet>
  );
}
