import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

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
