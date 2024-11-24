"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeForm from "@/app/checkout/stripe-form";
import { OrderArrays } from "@/types";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("Missing Stripe Publishable Key");
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

type CheckoutFormProps = {
  clientSecret: string;
  ordersArray: OrderArrays[];
};

export default function CheckoutForm({
  clientSecret,
  ordersArray,
}: CheckoutFormProps) {
  return (
    <div className="w-full rounded-lg lg:w-1/3">
      <div className="relative rounded-lg bg-gray-200 p-6 shadow-md dark:bg-white customSm:min-h-[300px] lg:h-full">
        <h2 className="mb-4 font-bold text-gray-900 dark:text-black customSm:text-xl lg:text-2xl">
          Complete Your Payment
        </h2>
        <Elements options={{ clientSecret }} stripe={stripePromise}>
          <StripeForm ordersArray={ordersArray as OrderArrays[]} />
        </Elements>
      </div>
    </div>
  );
}
