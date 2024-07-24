import "server-only";
import db from "@/lib/db";
import { ZSafeParseSuccessProps } from "@/types";
import { SafeParseSuccess } from "zod";

export const DL = {
  query: {
    findUser: async (email: string) => {
      return await db.user.findUnique({
        where: {
          email: email,
        },
      });
    },

    isAlreadyInTheCart: async (productId: string) => {
      return await db.cartItems.findFirst({
        where: {
          productId: productId,
        },
      });
    },

    getProductByCategory: async (category: string) => {
      return db.product.findMany({
        where: {
          category: category,
        },
      });
    },

    getProductBySubCategory: async (subCategory: string) => {
      return await db.product.findMany({
        where: {
          subCategory: subCategory,
        },
      });
    },

    getProductCountBySubCategory: async (subCategory: string) => {
      return await db.product.count({
        where: {
          subCategory: subCategory,
        },
      });
    },

    getAllProducts: async () => {
      return await db.product.findMany();
    },

    getUserCartItems: async (userId: string | undefined) => {
      return await db.cartItems.findMany({
        where: {
          userId: userId,
        },
        include: {
          product: {
            select: {
              title: true,
              image: true,
              price: true,
              discount: true,
              stock: true,
              subCategory: true,
              category: true,
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
      return await db.product.findUnique({
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
          quantity: 1,
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

    deleteCartItem: async (id: string) => {
      return await db.cartItems.delete({
        where: {
          id: id,
        },
      });
    },

    addProduct: async (
      parsedData: SafeParseSuccess<ZSafeParseSuccessProps>,
      secure_url: string,
    ) => {
      return await db.product.create({
        data: {
          sellerName: parsedData.data.sellerName,
          userId: parsedData.data.userId,
          title: parsedData.data.title,
          category: parsedData.data.category,
          subCategory: parsedData.data.subCategory,
          condition: parsedData.data.condition,
          price: parsedData.data.price,
          description: parsedData.data.description,
          discount: parsedData.data.discount ? parsedData.data.discount : 0,
          stock: parsedData.data.stock,
          image: secure_url,
        },
      });
    },

    signUp: async (email: string, hashedPassword: string) => {
      return await db.user.create({
        data: {
          email: email,
          password: hashedPassword,
          confirmPassword: hashedPassword,
        },
      });
    },
  },
};
