import { ProductProps } from "@/types";
import { formatCurrency } from "@/lib/currencyFormatter";
import getDiscountValue from "@/lib/getDiscountValue";
import Rating from "@/components/products/rating";
import SaleCountDown from "@/components/products/sale-count-down";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import ProductBlurDataImage from "@/components/products/product-blur-data-image";
import { addToCart } from "@/app/product/_actions/action";
import { DL } from "@/data-layer";
import Link from "next/link";
import CartQuantityInput from "@/components/cart-and-wishlist/cart/cart-quantity-input";
import SaveToDBAction from "@/app/product/save-to-db-action";

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
  subCategory,
}: ProductProps) {
  const session = await DL.mutations.getSession();

  const isAlreadyInTheCart = await DL.query.isAlreadyInTheCart(
    id,
    session?.user.id,
  );

  return (
    <CarouselItem
      key={id}
      className="flex customSm:flex-col customSm:gap-4 md:flex-row md:gap-8"
    >
      <ProductBlurDataImage
        image={image}
        title={title}
        size="customSm:w-full md:w-2/5 max-h-96"
      />
      <div className="flex flex-1 flex-col justify-evenly customSm:gap-2">
        <Rating rating={rating} />
        <Link href={`/product/${category}/${subCategory}/${id}`}>
          <h3 className="truncate text-lg font-bold customSm:text-base">
            {title}
          </h3>
        </Link>
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
        {/* //here */}
        <CartQuantityInput id={id} stock={stock} />
        <div className="my-4 flex gap-4">
          <Button
            disabled={stock === 0}
            className="w-full bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
            asChild
          >
            <Link href={`/checkout?id=${id}`}>Buy Now</Link>
          </Button>
          <SaveToDBAction
            isAlreadySaved={isAlreadyInTheCart !== null}
            buttonText="Add to Cart"
            savedText="Show Cart"
            serverAction={addToCart.bind(null, id, title)}
          />
        </div>
        {/* //here */}
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
