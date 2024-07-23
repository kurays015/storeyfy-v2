import { ProductMiniCardProps } from "@/types";
import Rating from "@/components/products/rating";
import Price from "@/components/products/price";
import Link from "next/link";
import ProductBlurDataImage from "@/components/products/product-blur-data-image";

export default function ProductMiniCard({
  id,
  title,
  image,
  category,
  price,
  discount,
  rating,
  hideRating,
  subCategory,
}: ProductMiniCardProps) {
  return (
    <Link href={`/product/${category}/${subCategory}/${id}`}>
      <div
        className={`flex gap-4 overflow-hidden rounded-md border p-2 customSm:gap-4 lg:max-w-[250px] xl:max-w-[300px]`}
      >
        <ProductBlurDataImage
          image={image}
          title={title}
          size="w-[80px] h-[80px]"
        />
        <div className="w-[calc(100%-85px)] self-center">
          <h1 className="truncate pr-4 text-sm font-bold">{title}</h1>
          <p className="text-sm text-slate-500 dark:text-white">{category}</p>
          {hideRating ? null : <Rating rating={rating} />}
          <Price price={price} discount={discount} />
        </div>
      </div>
    </Link>
  );
}
