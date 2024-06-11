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
  createdAt: Date;
  updatedAt: Date;
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
