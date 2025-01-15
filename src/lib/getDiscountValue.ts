export default function getDiscountValue(
  discount: number | null,
  price: number,
) {
  const validDiscount = discount && discount > 0 ? Math.min(discount, 100) : 0;

  // Calculate the discount amount
  const discountAmount = price * (validDiscount / 100);

  const discountedPrice = price - discountAmount;

  return Math.floor(discountedPrice * 100) / 100;
}
