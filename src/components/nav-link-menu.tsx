import Link from "next/link";
import Count from "@/components/count";
import { ReactNode } from "react";

type NavLinkMenuProps = {
  href: string;
  icon?: JSX.Element;
  count?: number;
  children?: ReactNode;
};

export default function NavLinkMenu({
  href,
  icon,
  count,
  children,
}: NavLinkMenuProps) {
  return (
    <Link href={href}>
      {children ? (
        children
      ) : (
        <div className="relative customSm:text-2xl customSm:text-black lg:text-3xl lg:dark:text-white">
          {!!count && <Count count={count} />}
          {icon}
        </div>
      )}
    </Link>
  );
}
