import HeaderTitle from "@/components/HeaderTitle";
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

export default function Testimonial() {
  return (
    <div className="w-[300px] flex flex-col">
      <HeaderTitle className="font-semibold text-slate-700 mb-6 text-lg border-b border-b-gray-300 tracking-wide">
        Testimonial
      </HeaderTitle>
      <div className="rounded-xl border overflow-hidden p-8 flex flex-col items-center gap-4 text-center flex-1">
        <div className="flex justify-center">
          <Image
            src="/no-profile.png"
            height={100}
            width={100}
            alt="Random user"
            className="rounded-full"
          />
        </div>
        <h3 className="uppercase font-bold text-slate-500">Random User</h3>
        <p>CEO & Founder Invision</p>
        <div className="flex justify-center">
          <ImQuotesLeft className="text-4xl text-red-500" />
        </div>
        <p className="max-w-[70%] text-slate-600">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}
