import { IoBagHandleOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import MobileBurgerMenu from "@/components/mobile/mobile-burger-menu";
import NavLinkMenu from "@/components/nav-link-menu";
import { CartButton } from "../cart/cart-button";
import { DL } from "@/data-layer";

export default async function MobileBottomNav() {
  const session = await DL.mutations.getSession();

  if (!session) return;

  const orderCount = await DL.query.getUserOrdersCount(session?.user.id);

  return (
    <div className="fixed bottom-0 left-1/2 z-10 flex w-full max-w-[500px] -translate-x-1/2 items-center border bg-white p-4 shadow-customBoxShadow dark:border-none customSm:justify-between 480px:justify-around 480px:rounded-t-lg lg:hidden">
      <MobileBurgerMenu />

      <NavLinkMenu href="/" icon={<IoHomeOutline />} />

      <NavLinkMenu href="/my-products" icon={<CiShoppingBasket />} />

      <CartButton />

      <NavLinkMenu href="/my-wishlist" count={1} icon={<FaRegHeart />} />

      <NavLinkMenu
        href="/my-orders"
        count={orderCount}
        icon={<IoBagHandleOutline />}
      />
    </div>
  );
}
