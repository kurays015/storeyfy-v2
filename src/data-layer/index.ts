import "server-only";
import db from "@/lib/db";

export const DL = {
  query: {
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
      return await db.product.findMany({
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
        take: 12,
      });
    },
    getNewArrivals: async () => {
      //less than one week product
      const now = new Date();

      const oneWeekAgo = new Date(now);
      oneWeekAgo.setDate(now.getDate() - 7);

      return await db.product.findMany({
        where: {
          createdAt: {
            gte: oneWeekAgo,
          },
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
  },
  mutations: {},
};
