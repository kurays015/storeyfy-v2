import { CartItemProps } from "@/types";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Price from "../products/price";

export default function CartItem({
  title,
  image,
  price,
  stock,
  discount,
}: CartItemProps) {
  return (
    <div className="relative rounded-md border-b border-gray-200 shadow-sm customSm:p-4 640px:px-4 640px:pb-4 640px:pt-0">
      <h2 className="mb-2 font-semibold text-gray-800 dark:text-white customSm:text-sm 480px:text-base 640px:text-lg">
        {title}
      </h2>
      <div className="flex flex-col items-center justify-between gap-5 sm:flex-row sm:items-start">
        <div className="flex w-full items-center gap-5 sm:w-auto">
          <Image
            src={image}
            width={80}
            height={80}
            alt={title}
            className="rounded-md border border-gray-300"
          />
          <div className="flex flex-col">
            <p className="text-sm text-gray-500 dark:text-white">
              In stock:{" "}
              <span
                className={`text-sm font-medium ${stock > 3 ? "text-green-600" : "text-red-600"}`}
              >
                {stock}
              </span>
            </p>
            <Price price={price} discount={discount} />
          </div>
        </div>
        <div className="mt-3 flex w-full items-center justify-between gap-3 self-center sm:mt-0 sm:w-auto 640px:flex-col">
          <Input
            type="number"
            value={1}
            className="w-16 rounded-md border border-gray-300 text-center"
          />
          {discount && (
            <p className="text-sm font-semibold text-green-600">
              {discount}% OFF!
            </p>
          )}
        </div>
      </div>
      <Button
        variant="unstyled"
        className="absolute -right-4 -top-4 text-red-600"
      >
        <MdDelete />
      </Button>
    </div>
  );
}
