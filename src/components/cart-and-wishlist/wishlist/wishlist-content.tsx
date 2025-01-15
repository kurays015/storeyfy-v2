import { DL } from "@/data-layer";
import Image from "next/image";
import Link from "next/link";

export default async function WishListContent() {
  const session = await DL.mutations.getSession();
  const WishListItems = await DL.query.getUserWishListItems(session?.user.id);

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6">
          {WishListItems.map((item) => (
            <Link
              href={`/product/${item.product.category}/${item.product.subCategory}/${item.product.id}`}
              key={item.id}
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg">
                <Image
                  width={300}
                  height={200}
                  src={item.product.image}
                  alt={item.product.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="truncate text-lg font-semibold text-gray-800">
                    {item.product.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
