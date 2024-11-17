"use client";
import { ProductProps } from "@/types";
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

type CheckOutFormProps = {
  product: ProductProps;
  clientSecret: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function CheckOutForm({
  product,
  clientSecret,
}: CheckOutFormProps) {
  return (
    <Elements options={{ clientSecret }} stripe={stripePromise}>
      <Form />
      <LinkAuthenticationElement />
    </Elements>
  );
}

export function Form() {
  return <PaymentElement />;
}
