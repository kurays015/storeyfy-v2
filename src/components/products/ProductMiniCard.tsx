import Image from "next/image";
import { ProductMiniCardProps } from "@/types";
import Rating from "@/components/Rating";
import Price from "@/components/products/Price";

export default function ProductMiniCard({
  id,
  title,
  image,
  category,
  price,
  discount,
  rating,
  stock,
  hasBorder,
}: ProductMiniCardProps) {
  return (
    <div
      className={`flex w-full gap-2 overflow-hidden ${
        hasBorder && "border border-gray-300 rounded-xl"
      }`}
    >
      <Image
        src={image}
        width={100}
        height={100}
        alt={title}
        style={{ width: 100, height: 100 }}
      />
      <div className="self-center">
        <h1 className="text-sm text-ellipsis overflow-hidden whitespace-nowrap w-[160px] font-bold">
          {title}
        </h1>
        <p className="text-slate-500 text-sm">{category}</p>
        <Rating rating={rating} />
        <Price price={price} discount={discount} />
      </div>
    </div>
  );
}
