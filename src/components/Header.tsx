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

export default async function Header() {
  const session = await getSession();

  return (
    <header className="border-b">
      <div className="border-b py-2 customSm:px-2">
        <div className="flex items-center justify-between lg:container">
          <ul className="flex items-center gap-2 text-gray-500 dark:text-white">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </ul>
          <p className="text-gray-500 text-xs dark:text-gray-300 font-medium customSm:hidden">
            FREE SHIPPING THIS WEEK ORDER OVER - $55
          </p>
          <div className="flex items-center gap-5 customSm:gap-2">
            {session ? <ProfileAvatar /> : <LoginButton />}
            <DarkModeToggle />
          </div>
        </div>
      </div>
      <div className="py-7 flex items-center justify-between customSm:flex-col customSm:gap-4 lg:flex-row lg:container">
        <Link href="/">
          <h1 className="font-semibold text-2xl">Storeyfy - v2</h1>
        </Link>
        <Input
          type="search"
          placeholder="Search a product..."
          className="w-3/4"
        />
        <ul className="flex items-center gap-5 text-3xl text-gray-600 dark:text-white">
          {session?.user && <AccountDropdown />}
          <FaRegHeart />
          <IoBagHandleOutline />
        </ul>
      </div>
    </header>
  );
}
