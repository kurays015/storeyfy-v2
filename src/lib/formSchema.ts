import { z } from "zod";
import isValidNumber from "./isValidNumber";

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

export const signUpSchema = z
  .object({
    email: z.string().email().min(1, { message: "Invalid Email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
    confirmPassword: z.string(),
  })
  .refine(
    values => {
      return values.password === values.confirmPassword;
    },
    { message: "Passwords must match!", path: ["confirmPassword"] }
  );

export const productSchema = z.object({
  title: z
    .string()
    .min(6, { message: "Title must be at least 6 characters" })
    .max(50),
  description: z
    .string()
    .min(6, { message: "Description must be at least 6 characters" }),
  category: z.string().min(3, { message: "Category must not be empty" }),
  price: z.string().refine(value => isValidNumber(value), {
    message: "Price must be a valid number",
  }),
  image: z.any(),
  userId: z.string(),
  sellerName: z.string(),
  discount: z.coerce
    .number()
    .int()
    // .max(2, { message: "Maximum of 2 characters only" })
    .optional()
    .or(z.literal("")),
});

// .refine(files => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
// .refine(
//   files => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
//   ".jpg, .jpeg, .png and .webp files are accepted."
// ),
