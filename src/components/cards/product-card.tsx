import Link from "next/link";
import Rating from "@/components/Rating";
import Price from "@/components/products/Price";
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
}: ProductProps) {
  return (
    <Link href={`/product/${title}/${category}/${id}`}>
      <div className="flex h-full flex-col justify-evenly gap-2 overflow-hidden rounded-xl border p-4">
        <ProductBlurDataImage
          image={image}
          title={title}
          size="w-full max-h-[170px]"
        />
        <p className="lg:sm font-medium uppercase text-red-400 customSm:text-xs xl:text-base">
          {category}
        </p>
        <h3 className="text-slate-500 dark:text-white customSm:text-sm lg:text-base xl:text-lg">
          {title}
        </h3>
        <Rating rating={rating} />
        <Price price={price} discount={discount} />
      </div>
    </Link>
  );
}
