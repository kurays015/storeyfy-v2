"use server";

import { DL } from "@/data-layer";
import { revalidatePath } from "next/cache";

export default async function deleteItemFromTable(id: string) {
  const deletedProduct = await DL.mutations.deleteProduct(id);

  if (!deletedProduct) {
    throw new Error("Error deleting product");
  }

  revalidatePath(`/my-products`);
}
