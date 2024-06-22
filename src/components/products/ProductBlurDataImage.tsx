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
      src={testImage}
      alt={title}
      width={100}
      height={100}
      // {...img}
      // placeholder="blur"
      // blurDataURL={base64}
      className={`rounded-md text-black dark:text-white ${size}`}
    />
  );
}
