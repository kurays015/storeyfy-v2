import ReusableTable from "@/components/reusable-table";
import { columns } from "@/app/my-orders/columns";
import { DL } from "@/data-layer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeaderTitle from "@/components/header-title";

export default async function MyOrdersPage() {
  const session = await DL.mutations.getSession();

  if (!session) return;

  const orders = await (
    await DL.query.findUserOrders(session.user.id)
  )
    // .filter((order) => order.product.stock !== 0)
    .map((order) => ({
      ...order.product,
      status: "pending",
      orderId: order.id,
      orderDate: order.createdAt,
      quantity: order.quantity,
    }));

  if (!orders.length || !orders)
    return (
      <div className="flex flex-col items-center justify-center text-center customSm:min-h-[60vh] lg:min-h-[75vh]">
        <p className="mb-2 dark:text-muted-foreground">
          No order placed yet...
        </p>
        <Button asChild>
          <Link href="/">Order Now!</Link>
        </Button>
      </div>
    );

  return (
    <main
      className={`mb-24 mt-12 gap-2 xl:container customSm:min-h-[37vh] customSm:px-4 md:mx-auto md:max-w-3xl lg:min-h-[60vh] lg:max-w-7xl ${!orders.length && "flex items-center justify-center"} `}
    >
      <HeaderTitle className="text-2xl font-bold text-slate-800 dark:text-muted-foreground">
        My Orders
      </HeaderTitle>
      <ReusableTable data={orders} columns={columns} />
    </main>
  );
}
