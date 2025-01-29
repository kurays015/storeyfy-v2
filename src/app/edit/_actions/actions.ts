"use server";

import { DL } from "@/data-layer";
import cloudinaryUpload from "@/app/add-product/cloudinary-upload";
import { editProductSchema } from "@/schema/formSchema";
import { UpdatedFields } from "@/types";
import { redirect } from "next/navigation";

export async function editProduct(id: string, formData: FormData) {
  try {
    const data = Object.fromEntries(formData);

    const existingProduct = await DL.query.getSingleProduct(id);

    if (!existingProduct) {
      return { message: "Product not found", success: false };
    }

    const parsedData = editProductSchema.safeParse({
      ...data,
    });

    if (!parsedData.success) {
      console.log(parsedData.error, "server action/zod error here");
      return {
        message: "Invalid form data",
        issues: parsedData.error.issues.map((issue) => issue.message),
      };
    }

    const updatedFields: UpdatedFields = {};

    Object.keys(parsedData.data).forEach(async (key) => {
      const typedKey = key as keyof typeof parsedData.data;

      //check if the value of the key is different from the existing product
      if (parsedData.data[typedKey] !== existingProduct[typedKey]) {
        updatedFields[typedKey] = parsedData.data[typedKey];
      }
    });

    const uploadRes = await cloudinaryUpload(
      parsedData.data.image,
      existingProduct.sellerName,
    );

    if (!uploadRes?.secure_url) {
      throw new Error("Image upload failed");
    }

    await DL.mutations.editProduct(updatedFields, uploadRes.secure_url, id);
  } catch (error) {
    return { message: "An error occured", error, success: false };
  }

  redirect("/my-products");
}
