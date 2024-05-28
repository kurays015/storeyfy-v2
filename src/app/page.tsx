import { BannerCarousel } from "@/components/BannerCarousel";
import { formatCurrency } from "@/lib/currencyFormatter";
import db from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  const products = await db.product.findMany();

  return (
    <main>
      <BannerCarousel />
      <div className="grid grid-cols-5 gap-2">
        {products.map(({ price, image, category, id, description, title }) => (
          <div key={id} className="text-slate-500">
            <Image
              src={image}
              width={500}
              height={500}
              alt={title}
              className="w-[200px] h-[200px] object-cover"
            />
            <h1>{title}</h1>
            <h3>{formatCurrency(parseFloat(price))}</h3>
            <h5>{category}</h5>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
