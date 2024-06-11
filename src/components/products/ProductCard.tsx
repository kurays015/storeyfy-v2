import { formatCurrency } from "@/lib/currencyFormatter";
import getDiscountValue from "@/lib/getDiscountValue";
import { ProductProps } from "@/types";
import Image from "next/image";

export default function ProductCard({
  id,
  title,
  image,
  category,
  price,
  discount,
}: ProductProps) {
  return (
    <div className="flex w-full gap-2 border border-gray-300 rounded-xl overflow-hidden">
      <Image
        src={image}
        width={100}
        height={100}
        alt={title}
        style={{ width: 100, height: 100 }}
      />
      <div className="self-center space-y-1 pr-4  py-2">
        <h1 className="text-sm text-ellipsis overflow-hidden whitespace-nowrap w-[160px] font-bold">
          {title}
        </h1>
        <p className="text-slate-500 text-sm">{category}</p>
        <div className="flex items-center gap-3 text-sm">
          {discount ? (
            <div className="font-bold text-base">
              {formatCurrency(getDiscountValue(discount, parseFloat(price)))}
            </div>
          ) : (
            <div className="font-bold text-base">
              {formatCurrency(parseFloat(price))}
            </div>
          )}
          {discount && (
            <del className="text-slate-400">
              {formatCurrency(parseFloat(price))}
            </del>
          )}
        </div>
      </div>
    </div>
  );
}
