import Image from "next/image";
import { ProductProps } from "@/types";
import { formatCurrency } from "@/lib/currencyFormatter";
import getDiscountValue from "@/lib/getDiscountValue";
import { getRemoteImageBlurDataURL } from "@/lib/blurDataURL";
import Rating from "@/components/Rating";
import SaleCountDown from "@/components/products/SaleCountDown";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default async function DealOfTheDayCarouselContent({
  id,
  title,
  description,
  price,
  discount,
  image,
  category,
  rating,
  stock,
}: ProductProps) {
  const { base64, img } = await getRemoteImageBlurDataURL(image);

  return (
    <CarouselItem key={id} className="flex gap-8 pl-0">
      <Image
        {...img}
        alt={title}
        placeholder="blur"
        blurDataURL={base64}
        style={{ width: 450, height: 450 }}
        className="dark:text-white text-black rounded-md"
      />
      <div className="flex flex-col justify-evenly">
        <Rating rating={rating} />
        <h3 className="text-lg text-ellipsis overflow-hidden whitespace-nowrap w-[420px] font-bold">
          {title}
        </h3>
        <p className="uppercase text-red-500 font-medium">{category}</p>
        <p>{description}</p>
        <div className="flex items-center gap-3">
          <p className="font-bold text-2xl">
            {formatCurrency(getDiscountValue(discount, parseFloat(price)))}
          </p>
          <del className="text-slate-400 text-2xl">
            {formatCurrency(parseFloat(price))}
          </del>
        </div>
        <Button className="bg-red-700 hover:bg-red-500 font-semibold text-lg p-6">
          Add to Cart
        </Button>
        <div className="flex items-cente justify-between  uppercase text-sm font-medium">
          <p>Already sold: 20</p>
          <p>Available: {stock}</p>
        </div>
        <div className="text-center">
          <div className="text-black text-sm font-semibold">
            HURRY UP! OFFER ENDS IN:
          </div>
          <SaleCountDown />
        </div>
      </div>
    </CarouselItem>
  );
}
