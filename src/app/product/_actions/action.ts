"use server";

import { DL } from "@/data-layer";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function addToCart(
  productId: string,
  title: string,
  formData: FormData,
) {
  const session = await getSession();

  if (!session) return;

  const isAlreadyInTheCart = await DL.query.isAlreadyInTheCart(productId);

  if (isAlreadyInTheCart || isAlreadyInTheCart !== null) {
    return { message: "Product is already in the cart!" };
  }

  await DL.mutations.createCartItems(session.user.id, productId);

  revalidatePath(`/product/${title}/${productId}`);
}

export async function deleteItemToCart(
  productId: string,
  title: string,
  formData: FormData,
) {
  const session = await getSession();

  if (!session) return;

  await DL.mutations.deleteCartItem(productId);

  revalidatePath(`/product/${title}/${productId}`);
}
