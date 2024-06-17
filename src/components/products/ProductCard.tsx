import Image from "next/image";
import Link from "next/link";
import Rating from "@/components/Rating";
import Price from "@/components/products/Price";
import { ProductProps } from "@/types";
import { getRemoteImageBlurDataURL } from "@/lib/blurDataURL";

export default async function ProductCard({
  id,
  image,
  title,
  category,
  rating,
  price,
  discount,
}: ProductProps) {
  const { base64, img } = await getRemoteImageBlurDataURL(image);

  return (
    <Link href={`/product/${title}/${category}/${id}`}>
      <div className="flex flex-col justify-evenly gap-2 rounded-xl border overflow-hidden p-4">
        <Image
          // src={image}
          // width={500}
          // height={500}
          // alt={title}
          {...img}
          alt={title}
          placeholder="blur"
          blurDataURL={base64}
          className="dark:text-white text-black rounded-xl"
        />
        <p className="text-red-400 uppercase text-xs font-medium">{category}</p>
        <h3 className="text-slate-500 text-lg dark:text-white">{title}</h3>
        <Rating rating={rating} />
        <Price price={price} discount={discount} />
      </div>
    </Link>
  );
}
