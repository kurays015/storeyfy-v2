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

export type CartItems = {
  id: string;
  userId: string;
  productId: string;
  product: CartItemProps;
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
  | "id"
>;

export type OrderArrays = CartItemProps;

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
    subCategory: string;
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
  stock: number;
};

export type CartFormProps = {
  id: string;
  title: string;
};

export type ProductTableColumn = Pick<
  ProductProps,
  | "id"
  | "title"
  | "description"
  | "category"
  | "subCategory"
  | "price"
  | "discount"
>;

export type Orders = {
  productId: string;
  userId: string;
  quantity: number;
  total: number;
};

export type ServerAction = (
  formData: FormData,
) => Promise<{ message: string } | undefined>;

export type SaveToDBButtonProps = {
  isAlreadySaved?: boolean;
  buttonText: string;
  savedText: string;
  serverAction: ServerAction;
};
