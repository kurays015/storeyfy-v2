import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { bannerImgs } from "@/lib/bannerImgs";
import Image from "next/image";

export function BannerCarousel() {
  return (
    <div className="max-w-7xl mx-auto my-8">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {bannerImgs.map((img, index) => (
            <CarouselItem key={index}>
              <Image
                src={img}
                alt="bannerImages"
                height={500}
                width={500}
                priority
                className="full w-full rounded-md cursor-pointer"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
