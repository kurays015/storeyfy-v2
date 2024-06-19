import { StaticImageData } from "next/image";

export type ProductProps = {
  userId: string;
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
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

export type CustomFormSeparatorProps = {
  className: string;
  width: string;
  text: string;
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
