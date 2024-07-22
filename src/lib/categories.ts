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
    subCategories: ["Shirt", "Shorts & Jeans", "Jacket", "Dress & Frock"],
  },
  {
    category: "Footwear",
    logo: shoes,
    subCategories: ["Sports", "Formal", "Casual", "Safety Shoes"],
  },
  {
    category: "Jewelry",
    logo: jewelry,
    subCategories: ["Earrings", "Couple Rings", "Necklace"],
  },
  {
    category: "Perfume",
    logo: perfume,
    subCategories: ["Clothes Perfume", "Deodorant"],
  },
  {
    category: "Cosmetics",
    logo: cosmetics,
    subCategories: ["Shampoo", "Sunscreen", "Body Wash", "Makeup Kit"],
  },
  {
    category: "Glasses",
    logo: glasses,
    subCategories: ["Sunglasses", "Lenses"],
  },
  {
    category: "Bags",
    logo: bag,
    subCategories: ["Shopping Bag", "Gym Backpack", "Purse", "Wallet"],
  },
];
