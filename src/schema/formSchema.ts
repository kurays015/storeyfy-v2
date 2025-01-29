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
    password: z.string(),
    confirmPassword: z.string(),
  })
  .superRefine(({ password, confirmPassword }, checkPassComplexity) => {
    const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
    const containsLowercase = (ch: string) => /[a-z]/.test(ch);
    const containsSpecialChar = (ch: string) =>
      /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
    let countOfUpperCase = 0,
      countOfLowerCase = 0,
      countOfNumbers = 0,
      countOfSpecialChar = 0;

    for (let i = 0; i < password.length; i++) {
      let ch = password.charAt(i);
      if (!isNaN(+ch)) countOfNumbers++;
      else if (containsUppercase(ch)) countOfUpperCase++;
      else if (containsLowercase(ch)) countOfLowerCase++;
      else if (containsSpecialChar(ch)) countOfSpecialChar++;
    }

    let errObj = {
      upperCase: { pass: true, message: "add upper case" },
      lowerCase: { pass: true, message: "add lower case" },
      specialCh: { pass: true, message: "add special ch" },
      totalNumber: { pass: true, message: "add number" },
    };

    if (countOfLowerCase < 1) {
      errObj.lowerCase.pass = false;
    }
    if (countOfNumbers < 1) {
      errObj.totalNumber.pass = false;
    }
    if (countOfUpperCase < 1) {
      errObj.upperCase.pass = false;
    }
    if (countOfSpecialChar < 1) {
      errObj.specialCh.pass = false;
    }

    const errorMessages = Object.values(errObj)
      .filter((obj) => !obj.pass)
      .map((obj) => obj.message)
      .join(", ");

    if (errorMessages) {
      checkPassComplexity.addIssue({
        code: "custom",
        path: ["password"],
        message: errorMessages,
      });
    }

    if (password !== confirmPassword) {
      checkPassComplexity.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords do not match.",
      });
    }
  });

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
    message: "Price must be a valid number and not exceed $999,999.99",
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

const nonEmptyString = (message?: string) =>
  z.string().refine((str) => str.trim() !== "", {
    message,
  });

export const editProductSchema = z.object({
  title: nonEmptyString("Title is required").optional(),
  description: nonEmptyString("Description is required").optional(),
  category: z.string().optional(),
  subCategory: z.string().optional(),
  condition: nonEmptyString("Condition is required").optional(),
  price: nonEmptyString("Price is required").optional(),
  discount: z.coerce.number().int().or(z.literal("")),
  stock: z.coerce.number({ invalid_type_error: "Stock is required" }).int(),
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
});
