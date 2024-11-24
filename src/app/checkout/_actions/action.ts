"use server";
import { DL } from "@/data-layer";
import { Orders } from "@/types";

export default async function createOrder(userOrder: Orders[]) {
  try {
    const session = await DL.mutations.getSession();

    if (!session) return;

    const createdOrder = await DL.mutations.createOrders(userOrder);

    if (!createdOrder) {
      throw new Error("Error creating order");
    }

    return {
      message: "Your order has been successfully placed!",
      success: true,
    };
  } catch (error) {
    return { message: "An error occured", error, success: false };
  }
}
