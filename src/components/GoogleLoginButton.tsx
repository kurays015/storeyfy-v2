// "use client";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function GoogleLoginButton() {
  return <Button onClick={() => signIn("google")}>Sign in with google</Button>;
}
