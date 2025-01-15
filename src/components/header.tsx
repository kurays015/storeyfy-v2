import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import AccountDropdown from "@/components/account-dropdown";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import ProfileAvatar from "@/components/profile-avatar";
import LoginButton from "@/components/login-btn";
import SearchInput from "@/components/search-input";
import { DL } from "@/data-layer";
import SaveToDBButton from "@/app/product/save-to-db-button";

export default async function Header() {
  const session = await DL.mutations.getSession();

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
          <SearchInput />
          <ul className="flex items-center gap-5 text-3xl customSm:hidden lg:flex">
            {session?.user && <AccountDropdown />}
            <SaveToDBButton savedText="Show Wishlist" />
            <SaveToDBButton savedText="Show Cart" />
          </ul>
        </div>
      </div>
    </header>
  );
}
