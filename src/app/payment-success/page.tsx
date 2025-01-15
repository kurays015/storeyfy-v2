import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Success",
  description: "payment success page",
};

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className="my-12 flex items-center justify-center text-gray-800 dark:text-gray-200 customSm:mx-4 customSm:min-h-[50vh] md:mx-0 lg:min-h-[65vh]">
      <div className="w-full max-w-lg rounded-lg border bg-white p-6 text-center shadow-lg dark:bg-gray-800 sm:p-8">
        <h1 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl lg:text-4xl">
          Thank You for Your Purchase!
        </h1>
        <p className="text-sm text-gray-700 dark:text-gray-300 sm:text-base lg:text-lg">
          Your payment was processed successfully.
        </p>

        <div className="mt-6 rounded-md bg-gray-200 p-4 text-lg font-semibold text-gray-900 shadow-md dark:bg-gray-700 dark:text-gray-100 sm:text-xl lg:text-2xl">
          Total Paid: {amount}
        </div>

        <div className="mt-8">
          <Link
            href="/my-orders"
            className="inline-block rounded bg-gray-900 px-3 py-1.5 text-xs font-semibold text-gray-100 shadow transition hover:bg-gray-800 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600 sm:px-4 sm:py-2 sm:text-sm lg:text-base"
          >
            View Your Orders
          </Link>
        </div>
      </div>
    </main>
  );
}
