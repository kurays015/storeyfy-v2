"use client";

import { absoluteRoute } from "@/routes";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const atBottom = absoluteRoute.includes(pathname);

  return (
    <footer
      className={`bg-[#242424] text-center font-semibold text-slate-300 dark:bg-slate-800 customSm:h-40 customSm:p-4 lg:h-auto lg:p-12 ${atBottom ? "hidden" : ""} ${pathname.startsWith("/search") && "lg:block"} `}
    >
      Copyright © {currentYear} Storeyfy All rights reserve.
    </footer>
  );
}
