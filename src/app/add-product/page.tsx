"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { addProduct } from "./_actions/action";
import { productSchema } from "@/lib/formSchema";
import { useFormState } from "react-dom";
import { useTransition } from "react";

export default function AddProductPage() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      price: "",
      image: "",
    },
  });

  // const [state, formAction] = useFormState(addProduct, { message: "" });

  // async function onSubmit(values: z.infer<typeof productSchema>) {
  //   const formData = new FormData();

  //   for (const [key, value] of Object.entries(values)) {
  //     formData.append(key, value);
  //   }
  //   // await addProduct(formData);
  //   // startTransition(() => {
  //   //   addProduct(formData);
  //   // });
  // }

  return (
    <Form {...form}>
      <form
        action={async formData => {
          const valid = await form.trigger();
          if (!valid) return;
          return addProduct(formData);
        }}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="your title" {...field} />
              </FormControl>
              <FormDescription>This is your Title</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="your description" {...field} />
              </FormControl>
              <FormDescription>This is your description</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categories</FormLabel>
              <Input placeholder="your gege" {...field} />

              {/* <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>price</FormLabel>
              <FormControl>
                <Input placeholder="your price" {...field} />
              </FormControl>
              <FormDescription>This is your price</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>image</FormLabel>
              <FormControl>
                <Input
                  placeholder="your image"
                  accept="image/*"
                  type="file"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your image</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending}>
          {isPending ? "Submitting" : "Add"}
        </Button>
      </form>
    </Form>
  );
}
