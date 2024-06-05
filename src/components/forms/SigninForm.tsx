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
import { signIn } from "next-auth/react";
import { loginSchema } from "@/lib/formSchema";
import { Button } from "../ui/button";
import GoogleLoginButton from "../credentials-login-button/GoogleLoginButton";
import GithubLoginButton from "../credentials-login-button/GithubLoginButton";
import Link from "next/link";
import CustomFormSeparator from "@/components/forms/CustomFormSeparator";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoaderIcon } from "lucide-react";

export default function SignInForm() {
  // const [error, setError] = useState<string | null>();
  // const router = useRouter();
  // const form = useForm<z.infer<typeof loginSchema>>({
  //   resolver: zodResolver(loginSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  // async function login(values: z.infer<typeof loginSchema>) {
  //   const res = await signIn("credentials", {
  //     email: values.email,
  //     password: values.password,
  //     redirect: false,
  //   });

  //   if (res?.status === 200) {
  //     router.push("/");
  //     router.refresh();
  //   } else {
  //     setError(res?.error);
  //   }
  // }

  return (
    <div>test1...</div>
    // <Form {...form}>
    //   <form
    //     onSubmit={form.handleSubmit(login)}
    //     className="flex flex-col gap-5 w-[450px]"
    //   >
    //     <FormField
    //       control={form.control}
    //       name="email"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Email</FormLabel>
    //           <FormControl>
    //             <Input placeholder="your email" {...field} />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="password"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Password</FormLabel>
    //           <FormControl>
    //             <Input placeholder="your password" type="password" {...field} />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     <p className="text-sm font-medium text-destructive">{error}</p>

    //     <Button
    //       type="submit"
    //       disabled={form.formState.isSubmitting}
    //       className="bg-green-700 hover:bg-green-600 dark:text-slate-300 font-bold"
    //     >
    //       {form.formState.isSubmitting ? (
    //         <>
    //           <LoaderIcon className="animate-spin mr-1" />
    //           Loggin in...
    //         </>
    //       ) : (
    //         "Login"
    //       )}
    //     </Button>
    //   </form>

    //   <CustomFormSeparator
    //     text="or"
    //     className="flex items-center justify-center gap-2 my-6 text-sm"
    //     width="w-[210px]"
    //   />

    //   <div className="flex flex-col gap-3">
    //     <GoogleLoginButton />
    //     <GithubLoginButton />
    //   </div>

    //   <CustomFormSeparator
    //     text="Don't have an account?"
    //     className="flex items-center justify-center gap-4 mt-14 mb-10 text-sm"
    //     width="w-1/5"
    //   />

    //   <div className="text-center">
    //     <Button
    //       asChild
    //       className="w-1/2 bg-transparent border-2 border-green-700 text-green-700 rounded-xl  hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-green-700 dark:hover:border-none dark:hover:text-gray-300 font-semibold"
    //     >
    //       <Link href="/signup" scroll={false}>
    //         Sign up
    //       </Link>
    //     </Button>
    //   </div>
    // </Form>
  );
}
