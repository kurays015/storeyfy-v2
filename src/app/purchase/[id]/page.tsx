import Stripe from "stripe";
import { DL } from "@/data-layer";
import NotFound from "@/components/not-found";
import CheckOutForm from "../checkout-form";
import convertToCents from "@/lib/convertToCents";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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
  });

  if (paymentIntent.client_secret === null) {
    throw new Error("Stripe failed to create payment intent");
  }

  return (
    <div className="my-12 xl:container customSm:px-4 md:mx-auto md:max-w-3xl lg:max-w-7xl">
      <h1>eto yung form?</h1>
      <CheckOutForm
        product={product}
        clientSecret={paymentIntent.client_secret}
      />
    </div>
  );
}
