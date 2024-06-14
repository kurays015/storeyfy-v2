import Link from "next/link";

export default function SummerCollection() {
  return (
    <div
      className="flex-1 rounded-xl bg-no-repeat bg-cover relative"
      style={{ backgroundImage: "url(/cta-banner.jpg)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 p-12 rounded-xl text-center space-y-2"
        style={{ background: "hsla(0, 0%, 100%, 0.7)" }}
      >
        <div className="text-white font-semibold p-2 bg-slate-800 rounded-md">
          25% DISCOUNT
        </div>
        <h1 className="text-2xl font-bold text-slate-700">Summer Collection</h1>
        <p className="text-slate-500">Starting @ $10</p>
        <Link
          href="/"
          className="uppercase font-extrabold text-xl text-slate-600"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
