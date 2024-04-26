import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const loginSchema = z.object({
  email: z.string().email().min(1, { message: "Invalid Email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

export const productSchema = z.object({
  title: z
    .string()
    .min(6, { message: "title must be at least 6 characters." })
    .max(50),
  description: z
    .string()
    .min(6, { message: "description must be at least 6 characters." })
    .max(50),
  rating: z
    .string()
    .min(1, { message: "product rating must be at least 1-5 range" })
    .max(3),
  category: z
    .string()
    .min(3, { message: "category must be at least 3 characters" }),
  price: z.string().min(1, { message: "price must be at least 1 character." }),
  image: z.any(),
  // // To not allow empty files
  // .refine(files => files?.length >= 1, { message: "Image is required." })
  // // To not allow files other than images
  // .refine(files => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
  //   message: ".jpg, .jpeg, .png and .webp files are accepted.",
  // })
  // // To not allow files larger than 5MB
  // .refine(files => files?.[0]?.size <= MAX_FILE_SIZE, {
  //   message: `Max file size is 5MB.`,
  // }),
});
