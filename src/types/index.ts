import { StaticImageData } from "next/image";
import { ReactNode } from "react";

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
