import { DL } from "@/data-layer";
import ProductCardGrid from "@/components/products/product-card-grid";
import NotFound from "@/components/not-found";
import db from "@/lib/db";

export default async function MostSoldProductsContent() {
  const mostSoldProducts = await DL.query.getMostSoldProducts();

  // const mostSoldProducts = await db.product.findMany({
  //   where: {
  //     rating: 5,
  //   },
  //   take: 12,
  // });

  // console.log(mostSoldProducts, "TEST!");

  if (!mostSoldProducts || !mostSoldProducts.length) return <NotFound />;

  return <ProductCardGrid products={mostSoldProducts} />;
}
