"use server";

import { DL } from "@/data-layer";
import { revalidatePath } from "next/cache";
import db from "@/lib/db";

export async function addToCart(
  productId: string,
  title: string,
  formData: FormData,
) {
  const session = await DL.mutations.getSession();

  if (!session) return;

  const isAlreadyInTheCart = await DL.query.isAlreadyInTheCart(
    productId,
    session.user.id,
  );

  if (isAlreadyInTheCart || isAlreadyInTheCart !== null) {
    return { message: "Product is already in the cart!" };
  }

  await DL.mutations.createCartItems(session.user.id, productId);

  revalidatePath(`/product/${title}/${productId}`);
}

export async function deleteItemToCart(
  id: string,
  title: string,
  formData: FormData,
) {
  const session = await DL.mutations.getSession();

  if (!session) return;

  const deletedItem = await DL.mutations.deleteCartItem(id);

  if (!deletedItem) {
    throw new Error("Error deleting cart item");
  }

  revalidatePath(`/product/${title}/${id}`);
}
