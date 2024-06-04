// "use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { FaGithubAlt } from "react-icons/fa";

export default function GithubLoginButton() {
  return (
    <Button
      onClick={() => signIn("github")}
      className="bg-slate-700 hover:bg-slate-600 dark:text-slate-300"
    >
      <FaGithubAlt className="text-2xl mr-2" /> Github
    </Button>
  );
}
