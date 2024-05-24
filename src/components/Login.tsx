"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function SignIn() {
  const pathname = usePathname();
  return (
    <div>
      <Button
        asChild
        className={`${pathname === "/signin" && "hidden"} text-xs`}
      >
        <Link href="/signin">Sign In</Link>
      </Button>
    </div>
  );
}
