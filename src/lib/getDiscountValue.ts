export default function getDiscountValue(
  discount: string | null,
  price: string
) {
  const productPrice = parseFloat(price);
  const discountPrice = parseFloat(discount || "");

  const discountAmount = productPrice * (discountPrice / 100);
  const discountedPrice = productPrice - discountAmount;
  return discountedPrice;
}
