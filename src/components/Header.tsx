import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { getSession } from "@/lib/auth";
import { Input } from "@/components/ui/input";
import AccountDropdown from "@/components/AccountDropdown";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import ProfileAvatar from "@/components/ProfileAvatar";
import LoginButton from "@/components/LoginButton";
import MobileBurgerMenu from "@/components/MobileBurgerMenu";

export default async function Header() {
  const session = await getSession();

  return (
    <header className="border-b">
      <div className="border-b py-2 customSm:px-2">
        <div className="flex items-center justify-between xl:container customSm:px-4 md:mx-auto md:max-w-3xl lg:max-w-7xl">
          <ul className="flex items-center gap-2 text-gray-500 dark:text-white">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </ul>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-300 customSm:hidden">
            FREE SHIPPING THIS WEEK ORDER OVER - $55
          </p>
          <div className="flex items-center gap-5 customSm:gap-2">
            {session ? <ProfileAvatar /> : <LoginButton />}
            <DarkModeToggle />
          </div>
        </div>
      </div>
      <div className="flex items-center py-7 customSm:container xl:container customSm:flex-col customSm:gap-4 customSm:px-4 md:mx-auto md:max-w-3xl lg:max-w-7xl lg:flex-row">
        <Link href="/">
          <h1 className="font-semibold customSm:text-lg lg:text-xl">
            StoreyfyV2
          </h1>
        </Link>
        <div className="flex items-center gap-4 customSm:w-full">
          <Input type="search" placeholder="Search a product..." />
          <ul className="flex items-center gap-5 text-3xl text-gray-600 dark:text-white customSm:hidden lg:flex">
            {session?.user && <AccountDropdown />}
            <FaRegHeart />
            <IoBagHandleOutline />
          </ul>
          <div className="customSm:block lg:hidden">
            <MobileBurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
