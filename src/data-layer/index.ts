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
  mutations: {},
};
