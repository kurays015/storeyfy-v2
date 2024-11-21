import { StaticImageData } from "next/image";
import { MouseEvent, ReactNode } from "react";

export type ProductProps = {
  userId: string;
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  subCategory: string;
  condition: string;
  price: string;
  sellerName: string;
  discount: number | null;
  rating?: number | null;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ZSafeParseSuccessProps = {
  userId: string;
  title: string;
  description: string;
  image?: any;
  category: string;
  subCategory: string;
  condition: string;
  price: string;
  sellerName: string;
  discount?: number | "" | undefined;
  rating?: number | null | undefined;
  stock: number;
};

export type CartItemProps = Pick<
  ProductProps,
  | "title"
  | "image"
  | "price"
  | "stock"
  | "discount"
  | "category"
  | "subCategory"
>;

export type CartItems = {
  id: string;
  userId: string;
  quantity: number | null;
  productId: string;
  product: CartItemProps;
};

export type CartContentProps = {
  cartItems: CartItems[];
};

export type ProductMiniCardProps = ProductProps & {
  hideRating?: boolean;
};

export type BannerContentProps = {
  headline: string;
  description: string;
  price: number;
};

export type RatingProps = {
  rating: number | null | undefined;
};

export type BlogCardProps = {
  title: string;
  image: StaticImageData;
  category: string;
  author: string;
  date: string;
};

export type SingleProductPageParamsProps = {
  params: {
    id: string;
    title: string;
    category: string;
  };
};

export type SingleProductLayoutProps = SingleProductPageParamsProps & {
  children: ReactNode;
};

type ButtonVariant =
  | "unstyled"
  | "default"
  | "destructive"
  | "ghost"
  | "outline"
  | "secondary"
  | "link";

export type SubmitButtonProps = {
  isLoading: boolean;
  children: ReactNode;
  loadingText: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  variant?: ButtonVariant;
};

export type Quantity = { [id: string]: number };

export type CartQuantityInputProps = {
  id: string;
  quantity: number | null;
  stock: number;
};

export type CartFormProps = {
  id: string;
  title: string;
};

export type ProductTableColumn = Pick<
  ProductProps,
  "id" | "title" | "description" | "category" | "subCategory" | "price"
>;
