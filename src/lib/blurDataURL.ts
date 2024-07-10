import "server-only";
import { getPlaiceholder } from "plaiceholder";

export async function getRemoteImageBlurDataURL(src: string) {
  try {
    const res = await fetch(src);
    if (!res.ok) {
      throw new Error("Failed to fetch remote image");
    }

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (error) {
    console.log(error);
  }
}
