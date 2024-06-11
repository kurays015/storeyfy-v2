import * as React from "react";
import Image from "next/image";
import db from "@/lib/db";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { formatCurrency } from "@/lib/currencyFormatter";
import getDiscountValue from "@/lib/getDiscountValue";
import { Button } from "../ui/button";

export async function DealOfTheDayCarousel() {
  const highestDiscountProducts = await db.product.findMany({
    where: {
      discount: {
        gte: 50,
      },
    },
  });

  return (
    <div className=" rounded-xl border p-4">
      <Carousel opts={{ loop: false }}>
        <CarouselContent className="">
          {highestDiscountProducts.map(
            ({ id, title, description, price, discount, image, category }) => (
              <CarouselItem key={id} className="flex gap-8">
                <Image src={image} width={450} height={450} alt={title} />
                <div>
                  <h3>{title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti impedit sit dicta harum quae doloremque itaque nam
                    atque!
                  </p>
                  <div className="flex items-center gap-3 my-5 text-2xl font-bold text-slate-700">
                    <p>
                      {formatCurrency(
                        getDiscountValue(discount, parseFloat(price))
                      )}
                    </p>
                    <del className="text-slate-400">
                      {formatCurrency(parseFloat(price))}
                    </del>
                  </div>
                  <Button>Add to Cart</Button>
                  <div className="flex items-cente justify-between my-4">
                    <p>Already sold: 20</p>
                    <p>Available: 40</p>
                  </div>
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
