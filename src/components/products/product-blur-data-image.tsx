import { getRemoteImageBlurDataURL } from "@/lib/blurDataURL";
import Image from "next/image";

type ProductBlurDataImageProps = {
  title: string;
  image: string;
  size: string;
};

export default async function ProductBlurDataImage({
  image,
  title,
  size,
}: ProductBlurDataImageProps) {
  const base64 = await getRemoteImageBlurDataURL(image);

  return (
    <Image
      // src={image}
      // alt={title}
      // width={100}
      // height={100}
      src={image}
      alt={title}
      width={100}
      height={100}
      blurDataURL={base64}
      placeholder="blur"
      className={`rounded-md text-black dark:text-white ${size} object-cover`}
    />
  );
}
