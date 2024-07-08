import { z } from "zod";
import isValidNumber from "./isValidNumber";

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const validRatings = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] as const;
const RatingSchema = z
  .enum(validRatings.map(String) as unknown as [string, ...string[]])
  .transform(Number)
  .optional();

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
    (values) => {
      return values.password === values.confirmPassword;
    },
    { message: "Passwords must match!", path: ["confirmPassword"] },
  );

export const productSchema = z.object({
  title: z
    .string()
    .min(6, { message: "Title must be at least 6 characters" })
    .max(50),
  description: z
    .string()
    .min(6, { message: "Description must be at least 6 characters" }),
  category: z.string().min(3, { message: "Category is required" }),
  subCategory: z.string().min(3, { message: "Sub category is required" }),
  condition: z.string().min(3, { message: "Condition is required" }),
  price: z.string().refine((value) => isValidNumber(value), {
    message: "Price must be a valid number",
  }),
  image: z.any(),
  userId: z.string(),
  sellerName: z.string(),
  discount: z.coerce.number().int().optional().or(z.literal("")),
  stock: z.coerce
    .number()
    .int()
    .min(1, { message: "Must not be empty" })
    .max(999, { message: "Maximum stock reached" }),
  rating: RatingSchema,
});

// .refine(files => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
// .refine(
//   files => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
//   ".jpg, .jpeg, .png and .webp files are accepted."
// ),
