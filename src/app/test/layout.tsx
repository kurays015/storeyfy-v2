import Link from "next/link";
import { ReactNode } from "react";

const testCategories = ["Clothes", "Footwear", "Cosmetics"];

export default function TestLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="space-x-2">
        {testCategories.map((category) => (
          <Link href={`/test/${category}`} key={category}>
            {category}
          </Link>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}
