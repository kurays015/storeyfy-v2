import HeaderTitle from "@/components/HeaderTitle";
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

export default function Testimonial() {
  return (
    <div className="lg:w-[300px]">
      <HeaderTitle className="mb-6 border-b text-lg font-semibold tracking-wide text-slate-700 dark:text-white">
        Testimonial
      </HeaderTitle>
      <div className="flex flex-col items-center overflow-hidden rounded-xl border p-3 text-center customSm:gap-4 lg:min-h-[380px] lg:gap-2">
        <div className="flex justify-center">
          <Image
            src="/no-profile.png"
            height={100}
            width={100}
            alt="Random user"
            className="rounded-full"
          />
        </div>
        <h3 className="font-bold uppercase text-slate-500 dark:text-white">
          Random User
        </h3>
        <p className="dark:text-slate-400">CEO & Founder Invision</p>
        <div className="flex justify-center">
          <ImQuotesLeft className="text-4xl text-red-500" />
        </div>
        <p className="max-w-[70%] text-slate-600 dark:text-slate-400">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}
