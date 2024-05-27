"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { productSchema } from "@/lib/formSchema";
import { addProduct } from "@/app/add-product/_actions/action";
import capitalFirstLetter from "@/lib/capitalFirstLetter";
import AddProductSubmitBtn from "../AddProductSubmitBtn";
import { Textarea } from "../ui/textarea";

export const categories = ["Women", "Men", "Furniture"];

export default function AddProductForm() {
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
              <FormLabel>{capitalFirstLetter(field.name)}</FormLabel>
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
              <FormLabel>{capitalFirstLetter(field.name)}</FormLabel>
              <FormControl>
                <Textarea placeholder="your description" {...field} />
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
              <FormLabel>{capitalFirstLetter(field.name)}</FormLabel>
              <Select
                name={field.name}
                onValueChange={field.onChange}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem value={category} key={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{capitalFirstLetter(field.name)}($) </FormLabel>
              <FormControl>
                <Input placeholder="your price" {...field} />
              </FormControl>
              <FormDescription className="text-muted-foreground">
                this is price
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{capitalFirstLetter(field.name)}</FormLabel>
              <FormControl>
                <Input
                  placeholder="your image"
                  accept="image/*"
                  type="file"
                  multiple
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your image</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <AddProductSubmitBtn />
      </form>
    </Form>
  );
}
