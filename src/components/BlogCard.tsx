import Image from "next/image";
import { BlogCardProps } from "@/types";

export default function BlogCard({
  title,
  author,
  category,
  date,
  image,
}: BlogCardProps) {
  return (
    <div>
      <Image
        className="w-full rounded-xl"
        src={image}
        height={100}
        width={100}
        alt={title}
      />
      <div className="my-4 space-y-1">
        <p className="text-red-400">{category}</p>
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-slate-700">
          {author} / {date}
        </p>
      </div>
    </div>
  );
}
