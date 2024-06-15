import Image from "next/image";
import Rating from "../Rating";
import Price from "./Price";
import { ProductProps } from "@/types";
import Link from "next/link";
import getImage from "@/lib/blurDataURL";

export default async function ProductCard({
  id,
  image,
  title,
  category,
  rating,
  price,
  discount,
}: ProductProps) {
  const { base64, img } = await getImage(image);

  return (
    <Link href={`/product/${title}/${category}/${id}`}>
      <div className="flex flex-col justify-evenly gap-2 rounded-xl border overflow-hidden p-4">
        <Image
          {...img}
          // height={500}
          // width={500}
          alt={title}
          placeholder="blur"
          blurDataURL={base64}
          className="dark:text-white text-black"
        />
        <p className="text-red-400 uppercase text-sm font-medium">{category}</p>
        <h3 className="text-slate-500 text-lg">{title}</h3>
        <Rating rating={rating} />
        <Price price={price} discount={discount} />
      </div>
    </Link>
  );
}
