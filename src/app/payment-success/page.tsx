import Link from "next/link";

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className="mx-4 mb-12 mt-12 rounded-md border bg-gradient-to-tr from-blue-500 to-purple-500 p-10 xl:container customSm:px-4 md:mx-auto md:max-w-3xl lg:max-w-7xl">
      <div className="mb-10">
        <h1 className="mb-2 text-4xl font-extrabold">
          Thank you for your purchase!
        </h1>
        <h2 className="text-2xl">Your payment was processed successfully.</h2>

        <div className="mt-5 rounded-md bg-white p-2 text-center text-4xl font-bold text-purple-500">
          {amount}
        </div>
      </div>
      <div className="text-center">
        <Link
          href="/my-orders"
          className="mt-5 inline-block rounded bg-white px-4 py-2 font-semibold text-purple-500 transition duration-300 hover:bg-purple-500 hover:text-white"
        >
          View Your Orders
        </Link>
      </div>
    </main>
  );
}
