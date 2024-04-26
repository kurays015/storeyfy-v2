"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function SignIn() {
  const pathname = usePathname();
  return (
    <div>
      <Button asChild className={`${pathname === "/signin" && "hidden"}`}>
        <Link href="/signin">SignIn</Link>
      </Button>
    </div>
  );
}
