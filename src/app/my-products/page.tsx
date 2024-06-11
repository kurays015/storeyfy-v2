import Link from "next/link";

import db from "@/lib/db";
import { getSession } from "@/lib/auth";
import ProductTable from "@/app/my-products/product-table";
import { Button } from "@/components/ui/button";

export default async function MyProductPage() {
  const session = await getSession();

  if (!session) return;

  const products = await db.product.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return (
    <div className="max-w-7xl mx-auto mt-12">
      {products.length ? (
        <>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-muted-foreground">
              My Products
            </h1>
            <Button asChild>
              <Link href="/add-product">List product </Link>
            </Button>
          </div>
          <ProductTable data={products} />
        </>
      ) : (
        <div className="text-center mt-48">
          <p className="dark:text-muted-foreground mb-2">
            No product listed yet...
          </p>
          <Button asChild>
            <Link href="/add-product">List Product</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
