import { formatCurrency } from "@/lib/currencyFormatter";
import getDiscountValue from "@/lib/getDiscountValue";
import Image from "next/image";

type ProductCardProps = {
  title: string;
  image: string;
  category: string;
  price: string;
  discount: string | null;
};

export default function ProductCard({
  title,
  image,
  category,
  price,
  discount,
}: ProductCardProps) {
  return (
    <div className="h-[100px] w-full flex items-center gap-5 border border-gray-300 p-5 rounded-xl">
      <Image src={image} width={80} height={80} alt={title} />
      <div>
        <h1 className="text-sm text-ellipsis overflow-hidden whitespace-nowrap w-[150px]">
          {title}
        </h1>
        <p>{category}</p>
        <div className="flex items-center gap-5 text-sm">
          {discount ? (
            <div>{formatCurrency(getDiscountValue(discount, price))}</div>
          ) : (
            <div>{formatCurrency(parseFloat(price))}</div>
          )}
          {discount && <del>{formatCurrency(parseFloat(price))}</del>}
        </div>
      </div>
    </div>
  );
}
