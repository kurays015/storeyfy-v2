import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { getSession } from "@/lib/auth";
import AccountDropdown from "@/components/AccountDropdown";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import ProfileAvatar from "@/components/ProfileAvatar";
import LoginButton from "@/components/LoginButton";

export default async function Header() {
  const session = await getSession();

  return (
    <header className="border-b">
      <div className="border-b py-2">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center gap-2 text-gray-500">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </ul>
          <p className="text-gray-500 text-xs dark:text-gray-300 font-medium">
            FREE SHIPPING THIS WEEK ORDER OVER - $55
          </p>
          <div className="flex items-center gap-5">
            {session ? <ProfileAvatar /> : <LoginButton />}
            <DarkModeToggle />
          </div>
        </div>
      </div>
      <div className="container py-7 flex items-center justify-between">
        <Link href="/">
          <h1 className="font-semibold text-2xl">Storeyfy - v2</h1>
        </Link>
        <Input
          type="search"
          placeholder="Search a product..."
          className="w-3/4"
        />
        <ul className="flex items-center gap-5 text-3xl text-gray-600">
          {session?.user && <AccountDropdown />}
          <FaRegHeart />
          <IoBagHandleOutline />
        </ul>
      </div>
    </header>
  );
}
