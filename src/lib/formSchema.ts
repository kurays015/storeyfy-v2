import { z } from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 5;
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
  price: z.string().refine(
    value => {
      const regex = /^\d+(\.\d{1,2})?$/;
      return regex.test(value);
    },
    {
      message: "Price must be a valid number",
    }
  ),
  image: z.any(),
  // .refine(files => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  // .refine(
  //   files => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //   ".jpg, .jpeg, .png and .webp files are accepted."
  // ),
});
