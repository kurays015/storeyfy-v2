import Image from "next/image";
import { ProductMiniCardProps } from "@/types";
import Rating from "@/components/Rating";
import Price from "@/components/products/Price";
import Link from "next/link";
// import { getRemoteImageBlurDataURL } from "@/lib/blurDataURL";

export default async function ProductMiniCard({
  id,
  title,
  image,
  category,
  price,
  discount,
  rating,
  stock,
  hasBorder,
  hideRating,
}: ProductMiniCardProps) {
  // const { base64, img } = await getRemoteImageBlurDataURL(image);

  return (
    <Link href={`/product/${title}/${category}/${id}`}>
      <div
        className={`flex w-full gap-4 p-2 overflow-hidden ${
          hasBorder && "border rounded-xl"
        }`}
      >
        <Image
          src={image}
          width={100}
          height={100}
          alt={title}
          // {...img}
          // alt={title}
          // placeholder="blur"
          // blurDataURL={base64}
          style={{ width: 80, height: 80 }}
          className="dark:text-white text-black rounded-xl"
        />
        <div className="self-center">
          <h1 className="text-sm text-ellipsis overflow-hidden whitespace-nowrap w-[160px] font-bold">
            {title}
          </h1>
          <p className="text-slate-500 text-sm dark:text-white">{category}</p>
          {hideRating ? null : <Rating rating={rating} />}
          <Price price={price} discount={discount} />
        </div>
      </div>
    </Link>
  );
}
