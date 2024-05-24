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
    .min(6, { message: "title must be at least 6 characters" })
    .max(50),
  description: z
    .string()
    .min(6, { message: "description must be at least 6 characters" })
    .max(50),
  category: z.string().min(3, { message: "category must not be empty" }),
  price: z.string().min(1, { message: "price must be at least 1 character" }),
  image: z.any(),
  // .refine(file => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB`)
  // .refine(
  //   file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
  //   "Only .jpg, .jpeg, .png and .webp formats are supported"
  // ),
});
