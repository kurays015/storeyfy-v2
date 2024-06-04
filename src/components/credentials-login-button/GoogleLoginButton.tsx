// "use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa";

export default function GoogleLoginButton() {
  return (
    <Button
      onClick={() => signIn("google")}
      className="bg-blue-700 hover:bg-blue-600 dark:text-slate-300"
    >
      <FaGoogle className="text-2xl mr-2" /> Google
    </Button>
  );
}
