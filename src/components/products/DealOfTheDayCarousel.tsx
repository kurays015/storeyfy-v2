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
import { Button } from "@/components/ui/button";
// import SaleCountDown from "@/components/products/SaleCountDown";

export async function DealOfTheDayCarousel() {
  const highestDiscountProducts = await db.product.findMany({
    where: {
      discount: {
        gte: 50,
      },
    },
  });

  return (
    <div className=" rounded-xl border py-5 px-8">
      <Carousel opts={{ loop: false }}>
        <CarouselContent className="">
          {highestDiscountProducts.map(
            ({ id, title, description, price, discount, image, category }) => (
              <CarouselItem key={id} className="flex gap-8 pl-0">
                <Image
                  src={image}
                  width={450}
                  height={450}
                  alt={title}
                  style={{ width: 450, height: 450 }}
                />
                <div className="flex flex-col justify-evenly">
                  <div>Rating*****</div>
                  <h3 className="text-lg text-ellipsis overflow-hidden whitespace-nowrap w-[420px] font-bold">
                    {title}
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti impedit sit dicta harum quae doloremque itaque nam
                    atque!
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="font-bold text-2xl">
                      {formatCurrency(
                        getDiscountValue(discount, parseFloat(price))
                      )}
                    </p>
                    <del className="text-slate-400 text-2xl">
                      {formatCurrency(parseFloat(price))}
                    </del>
                  </div>
                  <Button className="bg-red-700 hover:bg-red-500 font-semibold text-lg p-6">
                    Add to Cart
                  </Button>
                  <div className="flex items-cente justify-between  uppercase text-sm font-medium">
                    <p>Already sold: 20</p>
                    <p>Available: 40</p>
                  </div>
                  <div className="">
                    <div className="text-black text-sm font-semibold">
                      HURRY UP! OFFER ENDS IN:
                    </div>
                    {/* <SaleCountDown /> */}
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
