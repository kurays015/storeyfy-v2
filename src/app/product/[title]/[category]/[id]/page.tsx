import { DL } from "@/data-layer";
import { Metadata } from "next";

export const generateMetadata = ({
  params,
}: {
  params: { id: string };
}): Metadata => {
  return {
    title: `Product ${params.id}`,
  };
};

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await DL.query.getSingleProduct(params.id);
  return <div>{JSON.stringify(product)}</div>;
}
