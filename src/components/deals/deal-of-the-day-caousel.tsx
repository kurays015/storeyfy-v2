import * as React from "react";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import DealOfTheDayCarouselContent from "@/components/deal-of-the-day/deal-of-the-day-carousel-content";
import { DL } from "@/data-layer";

export async function DealOfTheDayCarousel() {
  const highestDiscountProducts = await DL.query.getHighestDiscount();

  return (
    <div className="overflow-auto rounded-xl border customSm:p-4 md:p-6">
      <Carousel opts={{ loop: false }}>
        <CarouselContent>
          {highestDiscountProducts.map((product) => (
            <DealOfTheDayCarouselContent key={product.id} {...product} />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
