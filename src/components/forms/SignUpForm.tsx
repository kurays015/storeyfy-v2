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
import { signUp } from "@/app/signup/_actions/action";
import CustomFormSeparator from "@/components/forms/CustomFormSeparator";
import { signUpSchema } from "@/lib/formSchema";
import { useFormState } from "react-dom";
import { useRef } from "react";
import SignUpFormSubmitBtn from "../SignUpFormSubmitBtn";

export default function SignUpForm() {
  // const formRef = useRef<HTMLFormElement>(null);
  // const [state, formAction] = useFormState(signUp, null);

  // const form = useForm<z.infer<typeof signUpSchema>>({
  //   resolver: zodResolver(signUpSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   },
  // });

  return (
    <div>testing...</div>
    // <Form {...form}>
    //   <form
    //     ref={formRef}
    //     action={formAction}
    //     onSubmit={async e => {
    //       await form.trigger();
    //       if (form.formState.isValid) {
    //         formRef.current?.requestSubmit();
    //       } else {
    //         e.preventDefault();
    //       }
    //     }}
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

    //     <FormField
    //       control={form.control}
    //       name="confirmPassword"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Confirm Password</FormLabel>
    //           <FormControl>
    //             <Input
    //               placeholder="confirm password"
    //               type="password"
    //               {...field}
    //             />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     {state?.message && (
    //       <div className="text-sm font-medium text-red-500">
    //         {state.message}
    //       </div>
    //     )}

    //     <SignUpFormSubmitBtn />
    //   </form>

    //   <CustomFormSeparator
    //     text="Already have an account?"
    //     className="flex items-center justify-center gap-4 mt-14 mb-10 text-sm"
    //     width="w-1/5"
    //   />

    //   <div className="text-center">
    //     <Button
    //       asChild
    //       className="w-1/2 bg-transparent border-2 border-green-700 text-green-700 rounded-xl  hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-green-700 dark:hover:border-none dark:hover:text-gray-300 font-semibold"
    //     >
    //       <Link href="/signin" scroll={false}>
    //         Sign in
    //       </Link>
    //     </Button>
    //   </div>
    // </Form>
  );
}
