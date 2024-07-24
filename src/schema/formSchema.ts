import { z } from "zod";
import isValidNumber from "@/lib/isValidNumber";
import { acceptedFiles } from "@/lib/acceptedFiles";
import { MAX_FILE_SIZE } from "@/constants";
import { RatingSchema } from "@/schema/ratingSchema";

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
  image:
    typeof window === "undefined"
      ? z.any().refine((file) => acceptedFiles(file?.type), {
          message: ".jpg, .jpeg, .png and .webp files are accepted.",
        })
      : z
          .any()
          .refine((file) => file?.length === 1, {
            message: "Image is required.",
          })
          .refine((file) => acceptedFiles(file[0]?.type), {
            message: ".jpg, .jpeg, .png and .webp format are accepted.",
          })
          .refine((file) => file[0]?.size <= MAX_FILE_SIZE, {
            message: "Max Image size is 10MB.",
          }),

  userId: z.string(),
  sellerName: z.string(),
  discount: z.coerce.number().int().optional().or(z.literal("")),
  stock: z.coerce
    .number({
      invalid_type_error: "Stock is required",
    })
    .int()
    .min(1, { message: "Must not be empty" }),
  rating: RatingSchema,
});
