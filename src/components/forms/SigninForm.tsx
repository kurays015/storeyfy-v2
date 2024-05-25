"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SigninForm() {
  const router = useRouter();

  function handleCredentialsLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    router.push("/");
  }
  return (
    <form onSubmit={handleCredentialsLogin}>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" placeholder="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Sign in</button>
    </form>
  );
}
