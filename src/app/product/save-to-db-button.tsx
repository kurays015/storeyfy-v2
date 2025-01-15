import { DL } from "@/data-layer";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { IoCartOutline } from "react-icons/io5";
import Count from "@/components/count";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { FaRegHeart } from "react-icons/fa";
import Content from "@/app/product/content";

export default async function SaveToDBButton({
  isAlreadySaved,
  savedText,
}: {
  isAlreadySaved?: boolean;
  savedText: string;
}) {
  const session = await DL.mutations.getSession();
  const [cartItemsCount, WishListItemsCount] = await Promise.all([
    DL.query.getCartItemsCount(session?.user.id),
    DL.query.getWishListItemsCount(session?.user.id),
  ]);

  const isWishList = savedText === "Show Wishlist";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="unstyled"
          className={`p-0 ${isAlreadySaved ? "w-full border border-black dark:border-white" : "relative h-auto"}`}
        >
          {isAlreadySaved ? (
            `${savedText}`
          ) : (
            <>
              <Count
                count={
                  !session
                    ? 0
                    : isWishList
                      ? WishListItemsCount
                      : cartItemsCount
                }
              />
              {isWishList ? (
                <FaRegHeart className="text-black customSm:text-2xl lg:text-3xl lg:dark:text-white" />
              ) : (
                <IoCartOutline className="text-black customSm:text-2xl lg:text-3xl lg:dark:text-white" />
              )}
            </>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto p-3">
        <SheetHeader className="mb-2">
          <SheetTitle>
            Your{" "}
            {savedText === "Show Wishlist"
              ? `Wishlist (${WishListItemsCount})`
              : `Cart (${cartItemsCount})`}
          </SheetTitle>
          <SheetDescription>Enjoy shopping!</SheetDescription>
        </SheetHeader>
        <Content isWishList={isWishList} />
      </SheetContent>
    </Sheet>
  );
}
