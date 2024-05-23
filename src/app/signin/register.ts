"use server";
import db from "@/lib/db";
import { hash } from "bcrypt";

export default async function register(formData: FormData) {
  const data = Object.fromEntries(formData);

  console.log(data);
  if (!data) {
    throw new Error("error form data.");
  }

  const hashedPassword = await hash(formData.get("password") as string, 10);

  await db.user.create({
    data: {
      email: formData.get("email") as string,
      password: hashedPassword,
    },
  });
}
