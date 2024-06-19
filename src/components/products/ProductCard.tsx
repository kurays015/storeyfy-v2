import Link from "next/link";
import Rating from "@/components/Rating";
import Price from "@/components/products/Price";
import { ProductProps } from "@/types";
import ProductBlurDataImage from "@/components/products/ProductBlurDataImage";

export default async function ProductCard({
  id,
  image,
  title,
  category,
  rating,
  price,
  discount,
}: ProductProps) {
  return (
    <Link href={`/product/${title}/${category}/${id}`}>
      <div className="flex flex-col justify-evenly gap-2 rounded-xl border overflow-hidden p-4 h-full">
        <ProductBlurDataImage image={image} title={title} size="w-full" />
        <p className="text-red-400 uppercase font-medium customSm:text-xs lg:sm xl:text-base">
          {category}
        </p>
        <h3 className="text-slate-500  dark:text-white customSm:text-sm lg:text-base xl:text-lg">
          {title}
        </h3>
        <Rating rating={rating} />
        <Price price={price} discount={discount} />
      </div>
    </Link>
  );
}
