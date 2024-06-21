"use client";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function MobileLogout() {
  return (
    <div className="absolute bottom-5 flex items-center">
      <LogOut className="mr-2 h-4 w-4" />
      <Button
        className="bg-transparent p-0 font-semibold text-slate-900 dark:text-white"
        onClick={() => signOut()}
      >
        Log out
      </Button>
    </div>
  );
}
