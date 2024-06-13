import Image from "next/image";
import Rating from "../Rating";
import Price from "./Price";
import { ProductProps } from "@/types";

export default function ProductCard({
  image,
  title,
  category,
  rating,
  price,
  discount,
}: ProductProps) {
  return (
    <div className="flex flex-col justify-evenly gap-2  rounded-xl border overflow-hidden p-4">
      <Image
        src={image}
        height={500}
        width={500}
        alt={title}
        className="dark:text-white text-black"
      />
      <p className="text-red-400 uppercase text-sm">{category}</p>
      <h3 className="text-slate-500 text-lg">{title}</h3>
      <Rating rating={rating} />
      <Price price={price} discount={discount} />
    </div>
  );
}
