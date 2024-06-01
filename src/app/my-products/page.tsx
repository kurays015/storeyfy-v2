import db from "@/lib/db";
import ProductTable from "./product-table";
import { getSession } from "@/lib/auth";

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
      <h1 className="text-2xl font-bold text-muted-foreground">My Products</h1>
      <ProductTable data={products} />
    </div>
  );
}
