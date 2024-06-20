"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleLoginButton from "@/components/credentials-login-button/GoogleLoginButton";
import GithubLoginButton from "@/components/credentials-login-button/GithubLoginButton";
import CustomFormSeparator from "@/components/CustomFormSeparator";
import { loginSchema } from "@/lib/formSchema";
import { SubmitButton } from "@/components/SubmitButton";

export default function SignInForm() {
  const [error, setError] = useState<string | null>();
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function login(values: z.infer<typeof loginSchema>) {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (res?.status === 200) {
      router.push("/");
      router.refresh();
    } else {
      setError(res?.error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(login)} className="flex flex-col gap-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled={form.formState.isSubmitting}
                  placeholder="your email"
                  {...field}
                />
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
                <Input
                  disabled={form.formState.isSubmitting}
                  placeholder="your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <p className="text-sm font-medium text-red-500">{error}</p>

        <SubmitButton
          className="bg-green-700 font-bold hover:bg-green-600 dark:text-slate-300"
          isLoading={form.formState.isSubmitting}
          loadingText="Loggin in..."
        >
          Login
        </SubmitButton>
      </form>

      <CustomFormSeparator text="or" />

      <div className="flex flex-col gap-3">
        <GoogleLoginButton />
        <GithubLoginButton />
      </div>

      <CustomFormSeparator text="Don't have an account?" />

      <div className="text-center">
        <Button
          asChild
          className="w-1/2 rounded-xl border-2 border-green-700 bg-transparent font-semibold text-green-700 hover:bg-gray-100 dark:text-slate-300 dark:hover:border-none dark:hover:bg-green-700 dark:hover:text-gray-300"
        >
          <Link href="/signup" scroll={false}>
            Sign up
          </Link>
        </Button>
      </div>
    </Form>
  );
}
