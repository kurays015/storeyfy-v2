import Link from "next/link";

export default function LoginButton() {
  return (
    <div>
      <Link
        href="/signin"
        scroll={false}
        className="dark:text-slate-300 text-sm"
      >
        Login
      </Link>
    </div>
  );
}
