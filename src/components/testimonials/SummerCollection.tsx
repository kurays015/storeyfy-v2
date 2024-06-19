import Image from "next/image";
import Link from "next/link";
import summerDiscount from "../../../public/cta-banner.jpg";

export default function SummerCollection() {
  return (
    <div className="relative overflow-auto">
      <Image
        src={summerDiscount}
        height={500}
        width={500}
        alt="Summer discount"
        className="h-full w-full rounded-xl text-gray-800 dark:text-white customSm:min-h-[350px] customSm:object-cover"
      />

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col rounded-md bg-lightBG text-center customSm:gap-1 customSm:p-4 480px:gap-2 480px:p-6">
        <div className="rounded-sm bg-gray-800 font-semibold text-white customSm:text-xs 480px:p-1 480px:text-base">
          25% DISCOUNT
        </div>
        <h1 className="font-extrabold text-gray-700 customSm:text-base 480px:text-2xl">
          Summer Collection
        </h1>
        <p className="text-gray-500 customSm:text-sm 480px:text-base">
          Starting @ $10
        </p>
        <Link
          href="/"
          className="font-extrabold uppercase text-gray-500 customSm:text-xs 480px:text-base"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
