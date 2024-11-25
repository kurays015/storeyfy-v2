"use server";
import { DL } from "@/data-layer";
import { Orders } from "@/types";
import db from "@/lib/db";

export default async function createOrder(userOrder: Orders[]) {
  try {
    const session = await DL.mutations.getSession();

    if (!session) return;

    const createdOrder = await DL.mutations.createOrders(userOrder);

    if (!createdOrder) {
      throw new Error("Error creating order");
    }

    await db.$transaction(async (tx) => {
      const updates = userOrder.map(async (order) => {
        const product = await DL.query.getSingleProduct(order.productId);

        if (!product) {
          throw new Error("No product found");
        }

        if (product.stock === 0) return;

        return tx.product.update({
          where: { id: order.productId },
          data: { stock: Math.max(0, product.stock - order.quantity) },
        });
      });
      return (await Promise.all(updates)).filter((item) => item);
    });

    return {
      message: "Your order has been successfully placed!",
      success: true,
    };
  } catch (error) {
    return { message: "An error occured", error, success: false };
  }
}
