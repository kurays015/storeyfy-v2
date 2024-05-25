"use client";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";

export default function LoginPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("email"));
    signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      callbackUrl: "/",
    });
  }

  return (
    <div>
      <GoogleLoginButton />
      <h1>Test...</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="email..." />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Sign in!</button>
      </form>
    </div>
  );
}
