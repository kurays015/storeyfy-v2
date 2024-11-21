"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ProductProps } from "@/types";
import StripeForm from "@/app/product/purchase/stripe-form";
import ProductDetails from "@/app/product/purchase/product-details";

type CheckoutFormProps = {
  product: ProductProps;
  clientSecret: string;
};

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("Missing Stripe Publishable Key");
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);
export default function CheckoutForm({
  product,
  clientSecret,
}: CheckoutFormProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-900 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        <ProductDetails product={product} />
        <div className="relative rounded-lg bg-gray-100 p-4 shadow-md dark:bg-gray-800 md:p-6 lg:p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
            Complete Your Payment
          </h2>
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            This is a test mode, you won&apos;t get charged. To complete the
            payment use the following details:
            <br />
            Ex.
            <br />
            Card Number: 4242 4242 4242 4242
            <br />
            Expiration: 01/25
            <br />
            Security Code: 123
          </p>
          <Elements options={{ clientSecret }} stripe={stripePromise}>
            <StripeForm {...product} />
          </Elements>
        </div>
      </div>
    </div>
  );
}
