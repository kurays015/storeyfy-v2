import getDiscountValue from "@/lib/getDiscountValue";
import { CartItems, Quantity } from "@/types";
import { formatCurrency } from "@/lib/currencyFormatter";

export function cartTotalPrice(cartItems: CartItems[], quantity: Quantity) {
  const totalPrice = cartItems
    .reduce((total, item) => {
      const itemQuantity = quantity[item.product.id] ?? 1;

      const availableStockQuantity =
        itemQuantity <= item.product.stock ? itemQuantity : item.product.stock;

      const totalResult =
        total +
        getDiscountValue(
          item.product.discount,
          parseFloat(item.product.price),
        ) *
          availableStockQuantity;

      return totalResult;
    }, 0)
    .toFixed(2);

  return formatCurrency(Number(totalPrice));
}
