import Link from "next/link";
import Count from "@/components/count";
import { ReactNode } from "react";

type NavLinkMenuProps = {
  href: string;
  icon?: JSX.Element;
  count?: number;
  className?: string;
  children?: ReactNode;
};

export default function NavLinkMenu({
  href,
  icon,
  count,
  className,
  children,
}: NavLinkMenuProps) {
  return (
    <Link href={href} className={className}>
      {children ? (
        children
      ) : (
        <>
          {count && <Count count={count} />}
          <div className="customSm:text-2xl customSm:text-black lg:text-3xl lg:dark:text-white">
            {icon}
          </div>
        </>
      )}
    </Link>
  );
}
