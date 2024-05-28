import { formatCurrency } from "@/lib/currencyFormatter";
import Image from "next/image";

type ProductCardProps = {
  title: string;
  image: string;
  category: string;
  price: string;
};

export default function ProductCard({
  title,
  image,
  category,
  price,
}: ProductCardProps) {
  return (
    <div>
      <Image src={image} width={500} height={500} alt={title} />
      <div>{category}</div>
      <h3>{title}</h3>
      <p>{formatCurrency(parseFloat(price))}</p>
    </div>
  );
}
