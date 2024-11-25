import { OrderArrays, Quantity } from "@/types";
import getDiscountValue from "@/lib/getDiscountValue";
import { formatCurrency } from "@/lib/currencyFormatter";

export function calculateGrandTotal(
  orderArray: OrderArrays[],
  quantity: Quantity,
) {
  const totalPrice = orderArray
    .reduce((total, item) => {
      const itemQuantity = quantity[item.id] ?? 1;

      const availableStockQuantity =
        itemQuantity <= item.stock ? itemQuantity : item.stock;

      const discountedPrice = getDiscountValue(
        item.discount,
        parseFloat(item.price),
      );

      const itemTotal = discountedPrice * availableStockQuantity;

      return total + itemTotal;
    }, 0)
    .toFixed(2);

  return formatCurrency(parseFloat(totalPrice));
}
