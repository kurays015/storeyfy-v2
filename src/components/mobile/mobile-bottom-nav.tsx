import { IoBagHandleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import MobileBurgerMenu from "@/components/mobile/mobile-burger-menu";
import NavLinkMenu from "@/components/nav-link-menu";
import { CartButton } from "../cart/cart-button";

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-1/2 z-10 flex w-full max-w-[500px] -translate-x-1/2 items-center border bg-white p-4 shadow-customBoxShadow dark:border-none customSm:justify-between 480px:justify-around 480px:rounded-t-lg lg:hidden">
      <MobileBurgerMenu />

      <NavLinkMenu href="/" icon={<IoHomeOutline />} className="relative" />

      <NavLinkMenu
        href="/my-products"
        icon={<CiShoppingBasket />}
        className="relative"
      />

      <CartButton />

      <NavLinkMenu
        href="/my-wishlist"
        count={1}
        icon={<FaRegHeart />}
        className="relative"
      />

      <NavLinkMenu
        href="/my-orders"
        count={1}
        icon={<IoBagHandleOutline />}
        className="relative"
      />
    </div>
  );
}
