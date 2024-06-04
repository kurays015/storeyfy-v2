"use server";

import db from "@/lib/db";
import { signUpSchema } from "@/lib/formSchema";
import { hash } from "bcrypt";

export async function signUp(formData: FormData) {
  try {
    const data = Object.fromEntries(formData);

    if (!data) return;

    const parsedData = signUpSchema.safeParse(data);

    if (!parsedData.success) {
      console.log(parsedData.error);
      return {
        message: "Error signing up",
        issue: parsedData.error.issues.map(issue => issue.message),
      };
    }

    const user = await db.user.findUnique({
      where: {
        email: parsedData.data.email,
      },
    });

    if (user) {
      return { message: "User already exist!" };
    }

    if (parsedData.data.confirmPassword !== parsedData.data.password) {
      console.log("not match");
      return { message: "Password doesn't match!" };
    }

    const hashedPassword = await hash(parsedData.data.password, 10);

    await db.user.create({
      data: {
        email: parsedData.data.email,
        password: hashedPassword,
        confirmPassword: hashedPassword,
      },
    });

    return { message: "Successfully signed up!", success: true };
  } catch (error) {
    return { message: "An unexpected error occured", success: false, error };
  }
}
