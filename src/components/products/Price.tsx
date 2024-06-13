import { formatCurrency } from "@/lib/currencyFormatter";
import getDiscountValue from "@/lib/getDiscountValue";

export default function Price({
  price,
  discount,
}: {
  price: string;
  discount: number | null;
}) {
  return (
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
  );
}
