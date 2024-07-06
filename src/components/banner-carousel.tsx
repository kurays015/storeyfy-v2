import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { banners } from "@/lib/banners";
import BannerContent from "@/components/banner-content";

export function BannerCarousel() {
  return (
    <div className="my-8">
      <Carousel opts={{ loop: true }}>
        <CarouselContent className="">
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="relative">
              <BannerContent {...banner} />
              <Image
                src={banner.img}
                alt="bannerImages"
                height={500}
                width={500}
                priority
                className="w-full cursor-pointer rounded-xl customSm:h-[300px] customSm:object-cover customSm:object-right md:h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
