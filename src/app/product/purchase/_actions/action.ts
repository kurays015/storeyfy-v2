"use server";
import { DL } from "@/data-layer";

export default async function createOrder(productId: string, price: number) {
  try {
    const session = await DL.mutations.getSession();

    if (!session) return;

    const createdOrder = await DL.mutations.createOrders(
      productId,
      session.user.id,
      price,
    );

    if (!createdOrder) {
      throw new Error("Error creating order");
    }

    return { message: "Order created successfully", success: true };
  } catch (error) {
    return { message: "An error occured", error, success: false };
  }
}
