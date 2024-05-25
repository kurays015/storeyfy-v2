import { DarkModeToggle } from "./DarkModeToggle";
import ProfileAvatar from "./ProfileAvatar";
import Login from "./Login";
import AccountDropdown from "./AccountDropdown";
import { getSession } from "@/lib/auth";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Input } from "./ui/input";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";

export default async function Header() {
  const session = await getSession();
  return (
    <header className="border border-b-gray-200">
      <div className="border border-b-gray-200 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <ul className="flex items-center gap-2 text-gray-500">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </ul>
          <p className="text-gray-500 text-xs dark:text-gray-300 font-medium">
            FREE SHIPPING THIS WEEK ORDER OVER - $55
          </p>
          <div className="flex items-center gap-5">
            {session ? (
              <>
                {session.user?.email && <ProfileAvatar />}
                <AccountDropdown />
              </>
            ) : (
              <Login />
            )}
            <DarkModeToggle />
          </div>
        </div>
      </div>
      <div className="py-7 flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="font-semibold text-2xl">
          <Link href="/">Storeyfy - v2</Link>
        </h1>
        <Input
          type="search"
          placeholder="Search a product..."
          className="w-3/4"
        />
        <ul className="flex items-center gap-5 text-3xl text-gray-600">
          <CgProfile />
          <FaRegHeart />
          <IoBagHandleOutline />
        </ul>
      </div>
    </header>
  );
}
