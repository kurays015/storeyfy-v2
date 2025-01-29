import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function cloudinaryUpload(
  image: File | undefined,
  userName: string | undefined,
) {
  if (!image) {
    return null;
  }

  const arrayBuffer = await image.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const uploadResponse: UploadApiResponse | undefined = await new Promise(
    (resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: `${userName} Products` },
          function (err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve(result);
          },
        )
        .end(buffer);
    },
  );

  if (!uploadResponse) {
    throw new Error("Error cloudinary upload");
  }

  return uploadResponse;
}
