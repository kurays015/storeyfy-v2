"use server";

import { v2 as cloudinary } from "cloudinary";
import db from "@/lib/db";
import { productSchema } from "@/lib/formSchema";
import { redirect } from "next/navigation";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function addProduct(formData: FormData) {
  const data = Object.fromEntries(formData);

  // Parse form data
  const image = formData.get("image") as File;
  const arrayBuffer = await image.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  const uploadResponse: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, function (err, result) {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      })
      .end(buffer);
  });

  const parsedData = productSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      message: "Invalid product schema form data.",
      issues: parsedData.error.issues.map(issue => issue.message),
    };
  }

  // Save product data to database
  await db.product.create({
    data: {
      ...parsedData.data,
      image: uploadResponse.secure_url,
    },
  });

  redirect("/my-products");
}
