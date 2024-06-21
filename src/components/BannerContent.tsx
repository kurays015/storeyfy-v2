import { Button } from "@/components/ui/button";
import { BannerContentProps } from "@/types";

export default function BannerContent({
  headline,
  description,
  price,
}: BannerContentProps) {
  return (
    <div className="md:10 absolute rounded-xl bg-lightBG px-6 py-5 customSm:left-8 customSm:right-4 customSm:top-24 customSm:max-w-[300px] 480px:top-12 md:max-w-[350px] md:bg-transparent lg:max-w-[450px] xl:top-24">
      <h2 className="customSm:md-4 leading-4 text-pink-400 customSm:mb-2 customSm:text-sm customSm:tracking-widest md:text-xl lg:text-3xl lg:tracking-wide">
        {headline}
      </h2>
      <p className="font-bold uppercase text-slate-800 dark:text-slate-600 customSm:text-2xl customSm:font-extrabold md:text-3xl lg:text-5xl">
        {description}
      </p>
      <p className="text-gray-500 customSm:my-2 customSm:hidden customSm:text-sm 480px:block md:my-4 md:text-xl lg:text-2xl">
        starting at <span className="font-bold lg:text-3xl">${price}</span>
      </p>
      <Button className="bg-pink-400 uppercase hover:bg-black dark:text-white customSm:h-6 customSm:w-20 customSm:text-[.7rem] md:h-8 md:w-28 md:text-sm lg:h-10 lg:w-32 lg:text-base">
        Shop now
      </Button>
    </div>
  );
}
