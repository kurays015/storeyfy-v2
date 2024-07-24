"use server";

import { productSchema } from "@/schema/formSchema";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { DL } from "@/data-layer";
import cloudinaryUpload from "@/app/add-product/cloudinary-upload";

export async function addProduct(formData: FormData) {
  try {
    const data = Object.fromEntries(formData);
    const session = await getSession();

    if (!session) return;

    const userName = session.user.email?.split("@")[0];

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
    const uploadRes = await cloudinaryUpload(parsedData.data.image, userName);

    // Save product data to database
    await DL.mutations.addProduct(parsedData, uploadRes.secure_url);
  } catch (error) {
    return { message: "An error occured", error, success: false };
  }

  redirect("/my-products");
}
