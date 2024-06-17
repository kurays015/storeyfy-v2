import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { banners } from "@/lib/banners";
import BannerContent from "@/components/BannerContent";

export function BannerCarousel() {
  return (
    <div className="my-8">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="relative">
              <BannerContent {...banner} />
              <Image
                src={banner.img}
                alt="bannerImages"
                height={500}
                width={500}
                priority
                className="full w-full rounded-md cursor-pointer customSm:h-[300px] object-cover object-right"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
