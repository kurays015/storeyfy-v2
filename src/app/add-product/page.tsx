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
import { Input } from "@/components/ui/input";
import { addProduct } from "./_actions/action";
import { productSchema } from "@/lib/formSchema";

export default function AddProductPage() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      rating: "",
      category: "",
    },
  });

  // async function onSubmit(values: z.infer<typeof productSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   const formData = new FormData();

  //   formData.append("title", values.title);
  //   formData.append("description", values.description);
  //   formData.append("category", values.category);
  //   formData.append("rating", values.rating);
  //   formData.append("price", values.price);
  //   formData.append("image", values.image as File);

  //   const product = await addProduct(formData);

  //   console.log(product, "PRODUCT ADDED!");
  // }

  return (
    <Form {...form}>
      <form action={addProduct} className="space-y-8">
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
              <FormLabel>category</FormLabel>
              <FormControl>
                <Input placeholder="your category" {...field} />
              </FormControl>
              <FormDescription>This is your category</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>rating</FormLabel>
              <FormControl>
                <Input placeholder="your rating" {...field} />
              </FormControl>
              <FormDescription>This is your rating</FormDescription>
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

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
