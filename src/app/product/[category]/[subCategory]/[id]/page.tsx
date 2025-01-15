import { DL } from "@/data-layer";
import { SingleProductPageParamsProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

//components
import Price from "@/components/products/price";
import Rating from "@/components/products/rating";
import NotFound from "@/components/not-found";
import { Button } from "@/components/ui/button";
import CartQuantityInput from "@/components/cart-and-wishlist/cart/cart-quantity-input";

//server action
import { addToCart, addToWishList } from "@/app/product/_actions/action";
import SaveToDBAction from "@/app/product/save-to-db-action";

export default async function SingleProductPage({
  params,
}: SingleProductPageParamsProps) {
  const session = await DL.mutations.getSession();

  const [product, isAlreadyInTheCart, isAlreadyInTheWishList] =
    await Promise.all([
      DL.query.getSingleProduct(params.id),
      DL.query.isAlreadyInTheCart(params.id, session?.user.id),
      DL.query.isAlreadyInTheWishList(params.id, session?.user.id),
    ]);

  if (!product) return <NotFound />;

  return (
    <div className="space-y-8">
      <div className="relative flex flex-col gap-6 rounded-lg border p-6 shadow-md md:flex-row">
        <div className="">
          <Image
            width={500}
            height={500}
            src={product.image}
            alt={product.title}
            className="w-full max-w-[600px] rounded-lg object-contain md:max-h-[400px]"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 md:w-1/2 lg:justify-evenly">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <Price price={product.price} discount={product.discount} />
          <div className="space-y-1">
            <p
              className={`text-sm font-medium ${product.stock > 3 ? "text-green-600" : "text-red-600"}`}
            >
              {product.stock > 3
                ? "In stock"
                : product.stock === 0
                  ? "Out of stock"
                  : "Almost out of stock"}
            </p>
            <p className="text-sm">
              Stock:{" "}
              <span
                className={`text-sm font-medium ${product.stock > 3 ? "text-green-600" : "text-red-600"}`}
              >
                {product.stock}
              </span>
            </p>
            <p className="text-sm">
              Condition: <span className="font-bold">{product.condition}</span>
            </p>
            <p className="text-sm">
              Estimated Delivery:{" "}
              <span className="font-medium">2 - 3 business days</span>
            </p>
          </div>
          <div className="flex items-center">
            <Rating rating={product.rating} />
          </div>
          <p className="text-sm">{product.category}</p>
          <p className="text-sm">
            seller:{" "}
            <Link
              href={`/seller/${product.sellerName}`}
              className="font-bold hover:opacity-70"
            >
              {product.sellerName}
            </Link>
          </p>

          <CartQuantityInput id={product.id} stock={product.stock} />

          <div className="my-3">
            <SaveToDBAction
              isAlreadySaved={isAlreadyInTheWishList !== null}
              buttonText="Add to Wishlist"
              savedText="Show Wishlist"
              serverAction={addToWishList.bind(null, product.id, product.title)}
            />
          </div>
          <div className="flex items-center gap-4 xl:mt-0">
            <Link
              href={`/checkout?id=${product.id}`}
              className={`${product.stock === 0 ? "pointer-events-none" : ""} w-full`}
            >
              <Button
                disabled={product.stock === 0}
                className="w-full bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
              >
                Buy now
              </Button>
            </Link>
            <SaveToDBAction
              isAlreadySaved={isAlreadyInTheCart !== null}
              buttonText="Add to Cart"
              savedText="Show Cart"
              serverAction={addToCart.bind(null, product.id, product.title)}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6 shadow-md">
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="mt-2 text-sm">{product.description}</p>
      </div>
    </div>
  );
}
