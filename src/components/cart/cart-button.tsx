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
          variant="unstyled"
          className={`h-auto p-0 ${isAlreadyInTheCart ? "w-full border border-black dark:border-white" : "relative"}`}
        >
          {isAlreadyInTheCart ? (
            "Check Cart"
          ) : (
            <>
              <Count count={!session ? 0 : cartItems.length} />
              <IoCartOutline className="text-black customSm:text-2xl lg:text-3xl lg:dark:text-white" />
            </>
          )}
        </Button>
      </SheetTrigger>
      <CartContent cartItems={cartItems} />
    </Sheet>
  );
}
