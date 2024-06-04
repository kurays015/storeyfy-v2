"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp } from "@/app/signup/_actions/action";
import CustomFormSeparator from "@/components/forms/CustomFormSeparator";
import { signUpSchema } from "@/lib/formSchema";
import { LoaderIcon } from "lucide-react";

export default function SignUpForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function handleSignUp(values: z.infer<typeof signUpSchema>) {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("confirmPassword", values.confirmPassword);

    const res = await signUp(formData);

    if (res?.success) {
      router.push("/signin", { scroll: false });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSignUp)}
        className="flex flex-col gap-5 w-[450px]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="your password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="confirm password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="bg-green-700 hover:bg-green-600 dark:text-slate-300 font-bold"
        >
          {form.formState.isSubmitting ? (
            <>
              <LoaderIcon className="animate-spin mr-1" />
              Signing up...
            </>
          ) : (
            "Sign up"
          )}
        </Button>
      </form>

      <CustomFormSeparator
        text="Already have an account?"
        className="flex items-center justify-center gap-4 mt-14 mb-10 text-sm"
        width="w-1/5"
      />

      <div className="text-center">
        <Button
          asChild
          className="w-1/2 bg-transparent border-2 border-green-700 text-green-700 rounded-xl  hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-green-700 dark:hover:border-none dark:hover:text-gray-300 font-semibold"
        >
          <Link href="/signin" scroll={false}>
            Sign in
          </Link>
        </Button>
      </div>
    </Form>
  );
}
