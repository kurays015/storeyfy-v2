import { ProductProps } from "@/types";
import { formatCurrency } from "@/lib/currencyFormatter";
import getDiscountValue from "@/lib/getDiscountValue";
import Rating from "@/components/products/my-rating";
import SaleCountDown from "@/components/products/sale-count-down";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import ProductBlurDataImage from "@/components/products/product-blur-data-image";

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
        <div className="my-4 flex gap-4">
          <Button className="border-2 border-black bg-black text-white hover:bg-white hover:text-black dark:bg-white dark:text-black">
            Buy now
          </Button>
          <Button className="bg-red-500 text-white hover:bg-red-700">
            Add to Cart
          </Button>
        </div>
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
