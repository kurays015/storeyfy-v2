import { DarkModeToggle } from "./DarkModeToggle";
import ProfileAvatar from "./ProfileAvatar";
import Login from "./Login";
import AccountDropdown from "./AccountDropdown";
import { getSession } from "@/lib/auth";
import Link from "next/link";

export default async function Header() {
  const session = await getSession();
  return (
    <header className="p-5 flex items-center justify-between ">
      <Link href="/">
        <h1 className="text-2xl font-semibold">Storeyfy</h1>
      </Link>
      <div className="flex items-center gap-5">
        {session ? (
          <>
            {session.user?.email && <ProfileAvatar />}
            <AccountDropdown />
          </>
        ) : (
          <Login />
        )}
        <h1>USER ID: {session?.user.id}</h1>
        <DarkModeToggle />
      </div>
    </header>
  );
}
