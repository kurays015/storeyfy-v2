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
import { useRef, useState } from "react";
import Image from "next/image";
import { useFormState } from "react-dom";
import { categories } from "@/lib/categories";

export default function AddProductForm() {
  const [productImage, setProductImage] = useState<null | string | ArrayBuffer>(
    ""
  );
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction] = useFormState(addProduct, null);

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

  function handleImageOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    const file = new FileReader();

    file.onload = function () {
      if (file.result) {
        setProductImage(file.result);
      }
    };

    file.readAsDataURL(target.files[0]);
  }

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={async e => {
          await form.trigger();
          if (form.formState.isValid) {
            formRef.current?.requestSubmit();
          } else {
            e.preventDefault();
          }
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
                  {...field}
                  onChangeCapture={handleImageOnChange}
                />
              </FormControl>
              {productImage ? (
                <Image
                  height={500}
                  width={500}
                  src={typeof productImage === "string" ? productImage : ""}
                  alt="preview"
                />
              ) : (
                <FormDescription>Drag image here</FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <AddProductSubmitBtn />
      </form>
    </Form>
  );
}
