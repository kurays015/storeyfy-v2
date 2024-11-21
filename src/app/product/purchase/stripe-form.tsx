import { FormEvent, useState } from "react";
import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import HeaderTitle from "@/components/header-title";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/currencyFormatter";
import getDiscountValue from "@/lib/getDiscountValue";
import { Loader2 } from "lucide-react";
import createOrder from "./_actions/action";
import { ProductProps } from "@/types";
import convertToCents from "@/lib/convertToCents";

export default function StripeForm({ price, discount, id }: ProductProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [email, setEmail] = useState<string>();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!stripe || !elements || !email) return;

    setIsLoading(true);

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setIsLoading(false);
      return;
    }

    const orders = await createOrder(
      id,
      convertToCents(getDiscountValue(discount, parseFloat(price))),
    );

    if (!orders) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NODE_ENV === "production" ? `${process.env.NEXT_PUBLIC_VERCEL_URL}` : "http://localhost:3000"}/payment-success?amount=${formatCurrency(
          getDiscountValue(discount, parseFloat(price)),
        )}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage("An unknown error occurred");
    }

    setIsLoading(false);
  }

  if (!stripe || !elements)
    return (
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <Loader2 className="animate-spin text-blue-500 dark:text-blue-500" />
      </div>
    );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <HeaderTitle className="mb-2">Checkout</HeaderTitle>
          {errorMessage && <p className="text-destructive">{errorMessage}</p>}
        </div>
        <div>
          <PaymentElement />
          <div className="mt-4">
            <LinkAuthenticationElement
              onChange={(e) => setEmail(e.value.email)}
            />
          </div>
        </div>
        <footer>
          <Button
            className="mt-4 w-full bg-black dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600"
            size="lg"
            disabled={!stripe || !elements || isLoading}
          >
            {isLoading ? (
              <>
                Purchasing <Loader2 className="ml-1 w-5 animate-spin" />{" "}
              </>
            ) : (
              `Purchase - ${formatCurrency(getDiscountValue(discount, parseFloat(price)))}`
            )}
          </Button>
        </footer>
      </div>
    </form>
  );
}
