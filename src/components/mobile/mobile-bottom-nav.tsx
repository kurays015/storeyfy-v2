import { IoBagHandleOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import MobileBurgerMenu from "@/components/mobile/mobile-burger-menu";
import NavLinkMenu from "@/components/nav-link-menu";
import { DL } from "@/data-layer";
import SaveToDBButton from "@/app/product/save-to-db-button";

export default async function MobileBottomNav() {
  const session = await DL.mutations.getSession();
  const orderCount = await DL.query.getUserOrdersCount(session?.user.id);

  if (!session) return;

  return (
    <div className="fixed bottom-0 left-1/2 z-10 flex w-full max-w-[500px] -translate-x-1/2 items-center border bg-white p-4 shadow-customBoxShadow dark:border-none customSm:justify-between 480px:justify-around 480px:rounded-t-lg lg:hidden">
      <MobileBurgerMenu />

      <NavLinkMenu href="/" icon={<IoHomeOutline />} />

      <NavLinkMenu href="/my-products" icon={<CiShoppingBasket />} />

      <SaveToDBButton savedText="Show Wishlist" />

      <SaveToDBButton savedText="Show Cart" />

      <NavLinkMenu
        href="/my-orders"
        count={orderCount}
        icon={<IoBagHandleOutline />}
      />
    </div>
  );
}
