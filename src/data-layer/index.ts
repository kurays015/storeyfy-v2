import "server-only";
import db from "@/lib/db";

export const DL = {
  query: {
    getCartItem: async (productId: string) => {
      return await db.cartItems.findFirst({
        where: {
          productId: productId,
        },
      });
    },
    getCartItems: async () => {
      return await db.cartItems.findMany({
        include: {
          product: {
            select: {
              title: true,
              image: true,
              price: true,
              discount: true,
              stock: true,
            },
          },
        },
      });
    },
    getBestSellers: async () => {
      return await db.product.findMany({
        where: {
          discount: {
            gte: 25,
          },
        },
        take: 4,
      });
    },
    getSingleProduct: async (id: string) => {
      return await db.product.findFirst({
        where: {
          id: id,
        },
      });
    },
    findUserProduct: async (userId: string) => {
      return await db.product.findMany({
        where: {
          userId: userId,
        },
      });
    },
    getHighestDiscount: async () => {
      return await db.product.findMany({
        where: {
          discount: {
            gte: 50,
          },
        },
      });
    },
    getMostSoldProducts: async () => {
      //need to change this
      return await db.product.findMany({
        where: {
          rating: 5,
        },
        take: 12,
      });
    },
    getNewArrivals: async () => {
      return await db.product.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: 8,
      });
    },
    getTrending: async () => {
      return await db.product.findMany({
        where: {
          discount: {
            gte: 20,
          },
        },
        take: 8,
      });
    },
    getTopRated: async () => {
      return await db.product.findMany({
        where: {
          discount: {
            lte: 20,
          },
        },
        take: 8,
      });
    },
    getRecommendedProducts: async (category: string, id: string) => {
      return await db.product.findMany({
        where: {
          id: {
            not: id,
          },
          category: category,
        },
        take: 12,
      });
    },
  },
  mutations: {
    createCartItems: async (userId: string, productId: string) => {
      return await db.cartItems.create({
        data: {
          userId: userId,
          productId: productId,
        },
        include: {
          product: {
            select: {
              title: true,
              image: true,
              price: true,
              discount: true,
              stock: true,
            },
          },
        },
      });
    },
  },
};
