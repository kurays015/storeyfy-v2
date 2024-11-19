import { DL } from "@/data-layer";
import NotFound from "@/components/not-found";
import convertToCents from "@/lib/convertToCents";
import Stripe from "stripe";
import CheckoutForm from "../checkout-form";
import { BreadCrumbs } from "@/components/breadcrumbs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function PuchasePage({
  params,
}: {
  params: { id: string };
}) {
  const product = await DL.query.getSingleProduct(params.id);

  if (!product) return <NotFound />;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: convertToCents(parseFloat(product.price)),
    currency: "USD",
    metadata: { productId: product.id },
    automatic_payment_methods: { enabled: true },
  });

  if (!paymentIntent.client_secret) {
    throw Error("Stripe failed to create payment intent");
  }

  return (
    <div className="xl:container customSm:mb-24 customSm:px-4 md:mx-auto md:max-w-3xl lg:mb-52 lg:max-w-7xl">
      <BreadCrumbs />
      <CheckoutForm
        product={product}
        clientSecret={paymentIntent.client_secret}
      />
    </div>
  );
}
