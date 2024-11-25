import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { DL } from "@/data-layer";

export default async function CartAndCheckoutBtn({
  href,
  children,
  isOutOfStock,
}: {
  href: string;
  children: ReactNode;
  isOutOfStock?: boolean;
}) {
  const session = await DL.mutations.getSession();
  const cartCount = await DL.query.getCartItemsCount(session?.user.id);

  if (cartCount === 0) return;

  return (
    <div className="my-4 customSm:flex customSm:justify-end">
      <Button disabled={isOutOfStock}>
        <Link
          href={href}
          className={`${isOutOfStock ? "pointer-events-none" : ""}`}
        >
          {children}
        </Link>
      </Button>
    </div>
  );
}
