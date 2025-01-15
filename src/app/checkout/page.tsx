import { DL } from "@/data-layer";
import { OrderArrays } from "@/types";
import { BreadCrumbs } from "@/components/breadcrumbs";
import UserOrders from "@/app/checkout/user-orders";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Stripe from "stripe";
import CheckoutForm from "@/app/checkout/checkout-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  description: "checkout page",
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  const session = await DL.mutations.getSession();
  const cartItems = await DL.query.getUserCartItems(session?.user.id);

  let ordersArray;

  try {
    if (searchParams?.id) {
      const product = await DL.query.getSingleProduct(searchParams.id);

      if (!product) {
        return (
          <div className="relative my-12 xl:container customSm:h-[55vh] customSm:px-4 md:mx-auto md:max-w-3xl lg:h-[65vh] lg:max-w-7xl">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="mb-2 text-base">Invalid product ID.</p>
            </div>
          </div>
        );
      }

      ordersArray = [product];
    } else {
      ordersArray = cartItems.map((item) => item.product);
    }
  } catch (error) {
    console.error("Error fetching orders:", error);

    return (
      <div className="relative my-12 xl:container customSm:h-[45vh] customSm:px-4 md:mx-auto md:max-w-3xl lg:h-[65vh] lg:max-w-7xl">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="mb-2 text-base">
            Something went wrong. Please try again.
          </p>
          <Button asChild>
            <Link href="/">Go to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (!ordersArray.length) {
    return (
      <div className="relative my-12 xl:container customSm:h-[55vh] customSm:px-4 md:mx-auto md:max-w-3xl lg:h-[65vh] lg:max-w-7xl">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="mb-2 text-base">No orders placed yet...</p>
          <Button asChild>
            <Link href="/">Shop now!</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (ordersArray.every((item) => item.stock === 0))
    return (
      <div className="customSm:min-h-[60vh] lg:min-h-[75vh]">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded border border-red-500 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <strong className="font-bold">Out of stock! </strong>
          <span className="block sm:inline">
            Product is all out of stock...
          </span>
        </div>
      </div>
    );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: "USD",
    metadata: {
      productIds: JSON.stringify(ordersArray.map((item) => item?.id)),
    },
    automatic_payment_methods: { enabled: true },
  });

  if (!paymentIntent.client_secret) {
    throw new Error("Stripe failed to create payment intent");
  }

  return (
    <main className="my-12 xl:container customSm:px-4 md:mx-auto md:max-w-3xl lg:max-w-7xl">
      <BreadCrumbs />
      <div className="rounded-lg">
        <h1 className="mb-6 text-2xl font-bold">Checkout</h1>
        <div className="flex flex-col gap-8 lg:flex-row">
          <UserOrders ordersArray={ordersArray as OrderArrays[]} />
          <CheckoutForm
            clientSecret={paymentIntent.client_secret}
            ordersArray={ordersArray as OrderArrays[]}
          />
        </div>
      </div>
    </main>
  );
}
