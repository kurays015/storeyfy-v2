import { IoBagHandleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import Link from "next/link";
import MobileBurgerMenu from "@/components/mobile/MobileBurgerMenu";
import Count from "@/components/Count";

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-1/2 flex w-full max-w-[500px] -translate-x-1/2 items-center border bg-white p-4 shadow-customBoxShadow dark:border-none customSm:justify-between 480px:justify-around 480px:rounded-t-lg lg:hidden">
      <MobileBurgerMenu />
      <Link href="/">
        <IoHomeOutline className="text-2xl text-black" />
      </Link>
      <Cart />
      <Link href="/my-products">
        <CiShoppingBasket className="text-2xl text-black" />
      </Link>
      <Orders />
    </div>
  );
}

function Cart() {
  return (
    <Link href="/my-cart" className="relative">
      <Count count={0} />
      <IoCartOutline className="text-2xl text-black" />
    </Link>
  );
}

function Orders() {
  return (
    <Link href="/my-orders" className="relative">
      <Count count={0} />
      <IoBagHandleOutline className="text-2xl text-black" />
    </Link>
  );
}
