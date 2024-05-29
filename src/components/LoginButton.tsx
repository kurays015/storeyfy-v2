import Link from "next/link";
import { Button } from "./ui/button";
import { getSession } from "@/lib/auth";

export default async function LoginButton() {
  const session = await getSession();
  return (
    <div>
      <Button asChild className={`${session?.user && "hidden"} text-xs`}>
        <Link href="/signin">Sign In</Link>
      </Button>
    </div>
  );
}
