export type ProductProps = {
  userId: string;
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: string;
  sellerName: string;
  discount: string | null;
  createdAt: Date;
  updatedAt: Date;
};
