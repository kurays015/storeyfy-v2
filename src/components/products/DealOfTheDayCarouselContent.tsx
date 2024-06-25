import { ProductProps } from "@/types";
import { formatCurrency } from "@/lib/currencyFormatter";
import getDiscountValue from "@/lib/getDiscountValue";
import Rating from "@/components/Rating";
import SaleCountDown from "@/components/products/SaleCountDown";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import ProductBlurDataImage from "@/components/products/ProductBlurDataImage";

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
  return (
    <CarouselItem
      key={id}
      className="flex customSm:flex-col customSm:gap-4 md:flex-row md:gap-8"
    >
      <ProductBlurDataImage
        image={image}
        title={title}
        size="customSm:w-full md:w-2/5"
      />
      <div className="flex flex-1 flex-col justify-evenly customSm:gap-2">
        <Rating rating={rating} />
        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold customSm:text-base">
          {title}
        </h3>
        <p className="font-medium uppercase text-red-500">{category}</p>
        <p className="text-sm">{description}</p>
        <div className="flex items-center gap-3">
          <p className="text-2xl font-bold">
            {formatCurrency(getDiscountValue(discount, parseFloat(price)))}
          </p>
          <del className="text-2xl text-slate-400">
            {formatCurrency(parseFloat(price))}
          </del>
        </div>
        <Button className="bg-red-700 p-6 text-lg font-semibold hover:bg-red-500 dark:text-white customSm:my-3 480px:w-36">
          Add to Cart
        </Button>
        <div className="flex items-center justify-between text-sm font-medium uppercase customSm:text-xs">
          <p>
            Already sold: <span className="customSm:font-bold">20</span>
          </p>
          <p>
            Available: <span className="customSm:font-bold">{stock}</span>
          </p>
        </div>
        <div className="customSm:text-start md:text-center">
          <div className="text-sm font-semibold text-black dark:text-white">
            HURRY UP! OFFER ENDS IN:
          </div>
          <SaleCountDown />
        </div>
      </div>
    </CarouselItem>
  );
}
