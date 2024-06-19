// import { getRemoteImageBlurDataURL } from "@/lib/blurDataURL";
import Image from "next/image";
import testImage from "../../../public/banner-3.jpg";

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
  // const { base64, img } = await getRemoteImageBlurDataURL(image);

  return (
    <Image
      // {...img}
      alt={title}
      src={testImage}
      // placeholder="blur"
      // blurDataURL={base64}
      className={`text-black rounded-md dark:text-white dark:rounded-none ${size}`}
    />
  );
}
