import Link from "next/link";
import Rating from "@/components/products/rating";
import Price from "@/components/products/price";
import { ProductProps } from "@/types";
import ProductBlurDataImage from "@/components/products/product-blur-data-image";

export default async function ProductCard({
  id,
  image,
  title,
  category,
  rating,
  price,
  discount,
  subCategory,
}: ProductProps) {
  return (
    <Link href={`/product/${category}/${subCategory}/${id}`}>
      <div className="flex h-full flex-col justify-evenly gap-2 overflow-hidden rounded-xl border p-4">
        <ProductBlurDataImage
          image={image}
          title={title}
          size="w-full max-h-[170px]"
        />
        <p className="lg:sm font-medium uppercase text-red-400 customSm:text-xs xl:text-base">
          {category}
        </p>
        <h3 className="truncate text-slate-500 dark:text-white customSm:text-sm lg:text-base">
          {title}
        </h3>
        <Rating rating={rating} />
        <Price price={price} discount={discount} />
      </div>
    </Link>
  );
}
