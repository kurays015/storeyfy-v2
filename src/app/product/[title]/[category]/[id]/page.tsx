import Rating from "@/components/products/rating";
import { Button } from "@/components/ui/button";
import { DL } from "@/data-layer";
import { formatCurrency } from "@/lib/currencyFormatter";
import { SingleProductPageParamsProps } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";

export async function generateMetadata({
  params,
}: SingleProductPageParamsProps): Promise<Metadata> {
  const product = await DL.query.getSingleProduct(params.id);

  return {
    title: product?.title,
  };
}
export default async function SingleProductPage({
  params,
}: SingleProductPageParamsProps) {
  const product = await DL.query.getSingleProduct(params.id);

  if (!product) return <h1>No product found!</h1>;

  return (
    <div className="space-y-8">
      {/* Product Details Section */}
      <div className="b relative flex flex-col gap-6 rounded-lg border p-6 shadow-md md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            width={500}
            height={500}
            src={product.image}
            alt={product.title}
            className="h-full max-h-[450px] w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex w-full flex-col gap-2 md:w-1/2 lg:justify-evenly">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl font-semibold">
            {formatCurrency(parseFloat(product.price))}
          </p>
          <div className="space-y-1">
            <p
              className={`text-sm font-medium ${product.stock > 3 ? "text-green-600" : "text-red-600"}`}
            >
              {product.stock > 3 ? "In stock" : "Almost out of stock"}
            </p>
            <p className="text-sm">
              Stock:{" "}
              <span
                className={`text-sm font-medium ${product.stock > 3 ? "text-green-600" : "text-red-600"}`}
              >
                {product.stock}
              </span>
            </p>
            <p className="text-sm">
              Condition: <span className="font-bold">{product.condition}</span>
            </p>
            <p className="text-sm">
              Estimated Delivery:{" "}
              <span className="font-medium">2 - 3 business days</span>
            </p>
          </div>
          <div className="flex items-center">
            <Rating rating={product.rating} />
          </div>
          <p className="text-sm">{product.category}</p>
          <p className="text-sm">
            seller:{" "}
            <Link
              href={`/seller/${product.sellerName}`}
              className="font-bold hover:opacity-70"
            >
              {product.sellerName}
            </Link>
          </p>
          <div className="my-3">
            <Button
              variant="destructive"
              className="w-full rounded-none border bg-white text-black hover:bg-black hover:text-white dark:bg-gray-50 dark:text-black dark:hover:bg-slate-300"
            >
              Add to Wishlist
              <CiHeart className="ml-1 text-3xl" />
            </Button>
          </div>
          <div className="flex gap-4 xl:mt-0">
            <Button className="w-full border-2 border-black bg-black text-white hover:bg-white hover:text-black">
              Buy now
            </Button>
            <Button className="w-full bg-red-500 text-white hover:bg-red-700">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="rounded-lg border p-6 shadow-md">
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="mt-2 text-sm">{product.description}</p>
      </div>
    </div>
  );
}
