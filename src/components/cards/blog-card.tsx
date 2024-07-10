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
      <div>
        <Image
          className="max-h-[165px] w-full rounded-xl"
          src={image}
          height={100}
          width={100}
          alt={title}
          placeholder="blur"
        />
      </div>
      <div className="my-4 space-y-1">
        <p className="text-red-400">{category}</p>
        <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold dark:text-slate-200">
          {title}
        </h1>
        <p className="text-slate-700 dark:text-slate-400">
          {author} / {date}
        </p>
      </div>
    </div>
  );
}
