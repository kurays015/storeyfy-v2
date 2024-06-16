import db from "@/lib/db";

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await db.product.findFirst({
    where: {
      id: params.id,
    },
  });
  return <div>{JSON.stringify(product)}</div>;
}
