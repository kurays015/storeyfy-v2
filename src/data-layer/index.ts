import "server-only";
import db from "@/lib/db";
import { Orders, UpdatedFields, ZSafeParseSuccessProps } from "@/types";
import { SafeParseSuccess } from "zod";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

export const DL = {
  query: {
    getCartItemsCount: async (userId: string | undefined) => {
      return await db.cartItems.count({
        where: {
          userId: userId,
        },
      });
    },

    getWishListItemsCount: async (userId: string | undefined) => {
      return await db.wishList.count({
        where: {
          userId: userId,
        },
      });
    },

    getUserOrdersCount: async (userId: string | undefined) => {
      return await db.order.count({
        where: {
          userId: userId,
        },
      });
    },

    findUserOrders: async (userId: string) => {
      return await db.order.findMany({
        where: {
          userId: userId,
        },
        include: {
          product: true,
        },
      });
    },

    getSearchResult: async (query: string) => {
      const sanitizedQuery = query?.trim().replace(/\s+/g, " | ");

      return await db.product.findMany({
        where: {
          title: {
            search: sanitizedQuery,
          },
        },
      });
    },

    findUser: async (email: string) => {
      return await db.user.findUnique({
        where: {
          email: email,
        },
      });
    },

    isAlreadyInTheCart: async (
      productId: string,
      userId: string | undefined,
    ) => {
      return await db.cartItems.findFirst({
        where: {
          userId: userId,
          productId: productId,
        },
      });
    },

    isAlreadyInTheWishList: async (
      productId: string,
      userId: string | undefined,
    ) => {
      return await db.wishList.findFirst({
        where: {
          userId: userId,
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
              id: true,
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

    getUserWishListItems: async (userId: string | undefined) => {
      return await db.wishList.findMany({
        where: {
          userId: userId,
        },
        include: {
          product: {
            select: {
              id: true,
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
    editProduct: async (
      updatedFields: UpdatedFields,
      secure_url: string | undefined,
      id: string,
    ) => {
      return await db.product.update({
        where: {
          id,
        },
        data: {
          ...updatedFields,
          image: secure_url,
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
          rating: 0,
        },
      });
    },

    deleteOrder: async (id: string) => {
      return await db.order.delete({
        where: {
          id: id,
        },
      });
    },

    createOrders: async (orderData: Orders[]) => {
      return await db.$transaction(async (tx) => {
        const orders = orderData.map(async (order) => {
          const product = await DL.query.getSingleProduct(order.productId);

          if (!product) {
            throw new Error("No product found");
          }

          if (product.stock === 0) return;

          const existingOrders = await tx.order.findFirst({
            where: {
              userId: order.userId,
              productId: order.productId,
            },
          });

          if (existingOrders) {
            return await tx.order.update({
              where: {
                id: existingOrders.id,
              },
              data: {
                quantity: existingOrders.quantity + order.quantity,
                total: order.total * (existingOrders.quantity + 1),
              },
            });
          }

          return tx.order.create({
            data: order,
          });
        });

        return await Promise.all(orders);
      });
    },

    deleteProduct: async (id: string) => {
      return await db.product.delete({ where: { id: id } });
    },

    getSession: () => {
      return getServerSession(authConfig);
    },

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

    createWishListItems: async (userId: string, productId: string) => {
      return await db.wishList.create({
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

    deleteCartItem: async (id: string) => {
      return await db.cartItems.delete({
        where: {
          id: id,
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
