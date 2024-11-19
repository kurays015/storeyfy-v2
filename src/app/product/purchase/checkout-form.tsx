"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ProductProps } from "@/types";
import Image from "next/image";
import { formatCurrency } from "@/lib/currencyFormatter";
import getDiscountValue from "@/lib/getDiscountValue";
import StripeForm from "@/app/product/purchase/stripe-form";

type CheckoutFormProps = {
  product: ProductProps;
  clientSecret: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);
export default function CheckoutForm({
  product,
  clientSecret,
}: CheckoutFormProps) {
  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <div className="flex flex-1 flex-col rounded-lg bg-white p-6 shadow-md dark:bg-gray-700">
        <p className="mb-2 text-black dark:text-slate-300">Your Order</p>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {product.title}
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
          {formatCurrency(
            getDiscountValue(product.discount, parseFloat(product.price)),
          )}
        </p>

        <div className="w-full">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="mt-6 rounded-lg customSm:w-full lg:w-40"
          />
        </div>
        <div className="mt-6 space-y-2">
          <p className="text-sm italic text-gray-700 dark:text-gray-300">
            Address: Sample Street. 321 Nowhere City
          </p>
        </div>
      </div>
      <div className="dark:bg- flex-1 rounded-lg bg-white p-6 shadow-md">
        <Elements options={{ clientSecret }} stripe={stripePromise}>
          <StripeForm price={product.price} discount={product.discount} />
        </Elements>
      </div>
    </div>
  );
}
