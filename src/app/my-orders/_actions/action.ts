"use server";

import { DL } from "@/data-layer";
import { revalidatePath } from "next/cache";

export default async function deleteOrder(id: string) {
  const deletedOrder = await DL.mutations.deleteOrder(id);

  if (!deletedOrder) {
    throw new Error("Error deleting order");
  }

  revalidatePath(`/my-orders`);
}
