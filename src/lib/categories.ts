import dress from "../../public/category-logo/dress.svg";
import bag from "../../public/category-logo/bag.svg";
import cosmetics from "../../public/category-logo/cosmetics.svg";
import glasses from "../../public/category-logo/glasses.svg";
import jewelry from "../../public/category-logo/jewelry.svg";
import perfume from "../../public/category-logo/perfume.svg";
import shoes from "../../public/category-logo/shoes.svg";

export const categories = [
  {
    category: "Clothes",
    logo: dress,
    subCategory: ["Shirt", "Shorts & Jeans", "Jacket", "Dress & Frock"],
  },
  {
    category: "Footwear",
    logo: shoes,
    subCategory: ["Sports", "Formal", "Casual", "Safety Shoes"],
  },
  {
    category: "Jewelry",
    logo: jewelry,
    subCategory: ["Earrings", "Couple Rings", "Necklace"],
  },
  {
    category: "Perfume",
    logo: perfume,
    subCategory: ["Clothes Perfume", "Deodorant", "Jacket", "Dress & Frock"],
  },
  {
    category: "Cosmetics",
    logo: cosmetics,
    subCategory: ["Shampoo", "Sunscreen", "Body Wash", "Makeup Kit"],
  },
  {
    category: "Glasses",
    logo: glasses,
    subCategory: ["Sunglasses", "Lenses"],
  },
  {
    category: "Bags",
    logo: bag,
    subCategory: ["Shopping Bag", "Gym Backpack", "Purse", "Wallet"],
  },
];
