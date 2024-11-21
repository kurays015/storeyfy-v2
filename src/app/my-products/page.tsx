import Link from "next/link";

import ProductTable from "@/app/my-products/product-table";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { DL } from "@/data-layer";

export const metadata: Metadata = {
  title: "My Products",
};

export default async function MyProductPage() {
  const session = await DL.mutations.getSession();

  if (!session) return;

  const products = await DL.query.findUserProduct(session.user.id);

  return (
    <div
      className={`mb-24 mt-12 gap-2 xl:container customSm:min-h-[37vh] customSm:px-4 md:mx-auto md:max-w-3xl lg:min-h-[60vh] lg:max-w-7xl ${!products.length && "flex items-center justify-center"} `}
    >
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
        <div className="text-center">
          <p className="mb-2 dark:text-muted-foreground">
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
