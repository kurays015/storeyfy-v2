import * as React from "react";

import db from "@/lib/db";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import DealOfTheDayCarouselContent from "./DealOfTheDayCarouselContent";

export async function DealOfTheDayCarousel() {
  const highestDiscountProducts = await db.product.findMany({
    where: {
      discount: {
        gte: 50,
      },
    },
  });

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
