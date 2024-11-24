"use client";

import { formatCurrency } from "@/lib/currencyFormatter";
import getDiscountValue from "@/lib/getDiscountValue";
import { useCartStore } from "@/stores/cart-store";
import { CartItems, OrderArrays } from "@/types";
import Image from "next/image";
import { calculateTotalPrice } from "@/app/checkout/stripe-form";

type UserOrdersProps = {
  ordersArray: OrderArrays[];
  cartItems: CartItems[];
};

export default function UserOrders({
  ordersArray,
  cartItems,
}: UserOrdersProps) {
  const quantities = useCartStore((state) => state.cartQuantities);

  return (
    <div className="max-h-[800px] w-full overflow-auto rounded-lg border p-6 shadow-md dark:bg-gray-800 lg:w-2/3">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
        Orders
      </h1>
      <div className="space-y-6">
        {ordersArray.map((item) => (
          <div
            key={item.id}
            className="flex flex-col space-y-4 border-b pb-4 dark:border-slate-600 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
              className="rounded-md object-cover"
            />

            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.category} / {item.subCategory}
              </p>
              <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">
                <span className="font-bold">Price: </span>
                {formatCurrency(
                  getDiscountValue(item.discount, parseFloat(item.price)),
                )}
              </p>
              {item.discount !== 0 && (
                <p className="mt-1 text-sm text-green-600 dark:text-green-400">
                  Discount: {item.discount}%
                </p>
              )}
            </div>

            <div className="text-right">
              <p className="text-lg font-bold text-gray-600 dark:text-gray-300">
                Qty:{" "}
                <span className="text-gray-800 dark:text-gray-100">
                  {quantities[item.id] || 1}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between dark:text-white">
        <h2 className="text-lg font-bold">Grand Total:</h2>
        <p className="text-lg font-bold">
          {calculateTotalPrice(ordersArray, quantities)}
        </p>
      </div>
    </div>
  );
}
