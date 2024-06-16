import { Button } from "@/components/ui/button";
import { BannerContentProps } from "@/types";

export default function BannerContent({
  headline,
  description,
  price,
}: BannerContentProps) {
  return (
    <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 max-w-[450px]">
      <h2 className="text-pink-300 text-3xl tracking-wide mb-4">{headline}</h2>
      <p className="font-bold text-5xl uppercase dark:text-slate-600">
        {description}
      </p>
      <p className="my-4 text-2xl text-gray-500">
        starting at <span className="text-3xl font-bold">${price}</span>
      </p>
      <Button className="bg-pink-300 hover:bg-black uppercase text-base dark:text-white">
        Shop now
      </Button>
    </div>
  );
}
