import { ReactNode } from "react";

export default function HeaderTitle({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return <h1 className={className}>{children}</h1>;
}
