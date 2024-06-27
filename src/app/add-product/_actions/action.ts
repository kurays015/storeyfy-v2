"use server";

import { v2 as cloudinary } from "cloudinary";
import db from "@/lib/db";
import { productSchema } from "@/lib/formSchema";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function addProduct(formData: FormData) {
  try {
    const data = Object.fromEntries(formData);
    const session = await getSession();
    const image = formData.get("image") as File;

    if (!session) return;

    const userName = session.user.email?.split("@")[0];

    //cloudinary upload
    const arrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const uploadResponse: any = await new Promise((resolve, reject) => {
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
    });

    const parsedData = productSchema.safeParse({
      ...data,
      userId: session.user.id,
      sellerName: userName,
    });

    if (!parsedData.success) {
      console.log(parsedData.error, "server action/zod error here");
      return {
        message: "Invalid form data",
        issues: parsedData.error.issues.map((issue) => issue.message),
      };
    }

    // Save product data to database
    await db.product.create({
      data: {
        sellerName: parsedData.data.sellerName,
        userId: parsedData.data.userId,
        title: parsedData.data.title,
        category: parsedData.data.category,
        price: parsedData.data.price,
        description: parsedData.data.description,
        discount: parsedData.data.discount ? parsedData.data.discount : 0,
        stock: parsedData.data.stock,
        image: uploadResponse.secure_url,
      },
    });
  } catch (error) {
    return { message: "An unexpected error occured", success: false, error };
  }

  redirect("/my-products");
}
