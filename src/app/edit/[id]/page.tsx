import { DL } from "@/data-layer";
import EditProductForm from "@/app/edit/edit-product-form";
import { notFound } from "next/navigation";

export default async function EditPage({ params }: { params: { id: string } }) {
  const product = await DL.query.getSingleProduct(params.id);

  if (!product) return notFound();

  return (
    <div className="my-12 xl:container customSm:px-4 md:mx-auto md:max-w-3xl lg:max-w-7xl">
      <h1 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
        Edit Product
      </h1>
      <EditProductForm product={product} />
    </div>
  );
}
