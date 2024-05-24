import { DarkModeToggle } from "./DarkModeToggle";
import ProfileAvatar from "./ProfileAvatar";
import Login from "./Login";
import AccountDropdown from "./AccountDropdown";
import { getSession } from "@/lib/auth";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Input } from "./ui/input";

export default async function Header() {
  const session = await getSession();
  return (
    <header>
      <div className="px-5 py-3 flex items-center justify-between ">
        <ul className="flex items-center gap-2 text-xl">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </ul>
        <p className="text-gray-600 text-sm dark:text-gray-300">
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
      <div className="p-5 flex items-center justify-between">
        <h1 className="uppercase font-semibold text-xl">Storeyfy v2</h1>
        <Input
          type="search"
          placeholder="Search a product..."
          className="w-6/12"
        />
        <div>iconss</div>
      </div>
    </header>
  );
}
