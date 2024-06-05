"use server";

import db from "@/lib/db";
import { signUpSchema } from "@/lib/formSchema";
import { hash } from "bcrypt";
import { redirect } from "next/navigation";

export async function signUp(prevState: any, formData: FormData) {
  try {
    const data = Object.fromEntries(formData);

    if (!data) return;

    const parsedData = signUpSchema.safeParse(data);

    if (!parsedData.success) {
      console.log(parsedData.error);
      return {
        message: "Invalid form data",
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
  } catch (error) {
    return { message: "An unexpected error occured", success: false, error };
  }

  redirect("/signin");
}
