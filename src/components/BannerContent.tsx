import { Button } from "@/components/ui/button";
import { BannerContentProps } from "@/types";

export default function BannerContent({
  headline,
  description,
  price,
}: BannerContentProps) {
  return (
    <div className="absolute py-5 px-6 bg-lightBG rounded-xl customSm:top-24 customSm:left-8 customSm:right-4 customSm:max-w-[300px] 480px:top-12 md:bg-transparent md:10 md:max-w-[350px] lg:max-w-[450px] xl:top-24">
      <h2 className="text-pink-400 customSm:tracking-widest customSm:text-sm customSm:mb-2 customSm:md-4 md:text-xl lg:text-3xl lg:tracking-wide leading-4">
        {headline}
      </h2>
      <p className="font-bold uppercase text-slate-800 dark:text-slate-600 customSm:text-2xl customSm:font-extrabold md:text-3xl lg:text-5xl ">
        {description}
      </p>
      <p className=" text-gray-500 customSm:text-sm customSm:hidden customSm:my-2 md:text-xl md:my-4 lg:text-2xl 480px:block">
        starting at <span className="font-bold lg:text-3xl ">${price}</span>
      </p>
      <Button className="bg-pink-400 hover:bg-black uppercase dark:text-white customSm:text-[.7rem] customSm:h-6 customSm:w-20 md:text-sm md:w-28 md:h-8 lg:text-base lg:h-10 lg:w-32">
        Shop now
      </Button>
    </div>
  );
}

// absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 customSm:bg-lighBG customSm:py-4 customSm:px-6 customSm:rounded-xl customSm:w-[230px] customSm:top-[60%] customSm:left-[53%] lg:p-0 lg:bg-transparent lg:w-[450px]
