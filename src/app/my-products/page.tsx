import Link from "next/link";
import { Metadata } from "next";
import { DL } from "@/data-layer";
import { columns } from "@/app/my-products/columns";
import ReusableTable from "@/components/reusable-table";
import { Button } from "@/components/ui/button";
import HeaderTitle from "@/components/header-title";

export const metadata: Metadata = {
  title: "My Products",
  description: "my products page",
};

export default async function MyProductPage() {
  const session = await DL.mutations.getSession();

  if (!session) return;

  const products = await DL.query.findUserProduct(session.user.id);

  if (!products.length || !products)
    return (
      <div className="flex flex-col items-center justify-center text-center customSm:min-h-[55vh] lg:min-h-[75vh]">
        <p className="mb-2 dark:text-muted-foreground">
          No product listed yet...
        </p>
        <Button asChild>
          <Link href="/add-product">List Product</Link>
        </Button>
      </div>
    );

  return (
    <div className="mb-24 mt-12 gap-2 xl:container customSm:min-h-[37vh] customSm:px-4 md:mx-auto md:max-w-3xl lg:min-h-[60vh] lg:max-w-7xl">
      <div className="flex items-center justify-between">
        <HeaderTitle className="text-2xl font-bold text-slate-800 dark:text-muted-foreground">
          My Products
        </HeaderTitle>
        <Button asChild>
          <Link href="/add-product">List product </Link>
        </Button>
      </div>
      <ReusableTable data={products} columns={columns} />
    </div>
  );
}
