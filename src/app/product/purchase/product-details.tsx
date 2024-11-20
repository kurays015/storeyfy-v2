import Image from "next/image";
import { formatCurrency } from "@/lib/currencyFormatter";
import getDiscountValue from "@/lib/getDiscountValue";
import Rating from "@/components/products/rating";
import { ProductProps } from "@/types";

export default function ProductDetails({ product }: { product: ProductProps }) {
  return (
    <div>
      <p className="mb-2 text-base font-medium text-gray-800 dark:text-gray-300">
        Your Order
      </p>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        {product.title}
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {product.category} - {product.subCategory}
      </p>
      <div className="my-2">
        <Rating rating={product.rating} />
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-400">
        Condition: {product.condition}
      </p>

      <p className="text-sm text-gray-700 dark:text-gray-400">
        Seller: <span className="font-bold">{product.sellerName}</span>
      </p>

      <div className="mt-4">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="rounded-md text-white"
        />
      </div>

      <p className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-300">
        {formatCurrency(
          getDiscountValue(product.discount, parseFloat(product.price)),
        )}
      </p>

      <p className="mt-4 text-sm italic text-gray-600 dark:text-gray-400">
        Ship to: Address: Sample Street, 321 Nowhere City
      </p>
    </div>
  );
}
