import AddProductForm from "@/app/add-product/add-product-form";

export default function AddProductPage() {
  return (
    <div className="my-12 xl:container customSm:px-4 md:mx-auto md:max-w-3xl lg:max-w-7xl">
      <h1 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
        Add Product
      </h1>
      <AddProductForm />
    </div>
  );
}
