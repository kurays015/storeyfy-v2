"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import Image from "next/image";

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
import AddProductSubmitBtn from "@/components/add-product-submit-btn";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { categories } from "@/lib/categories";
import capitalFirstLetter from "@/lib/capitalFirstLetter";
import { addProduct } from "@/app/add-product/_actions/action";
import { productSchema } from "@/schema/formSchema";

export default function AddProductForm() {
  const [productImage, setProductImage] = useState<null | string | ArrayBuffer>(
    "",
  );
  const [subCategoryIndex, setSubCategoryIndex] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      price: "",
      image: "",
      sellerName: "",
      userId: "",
      subCategory: "",
      condition: "",
    },
  });

  const fileRef = form.register("image");

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
        action={addProduct}
        onSubmit={async (e) => {
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
              <FormDescription>Product Title</FormDescription>
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
              <FormDescription>Product Description</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-wrap gap-5">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>{capitalFirstLetter(field.name)}</FormLabel>
                <Select
                  name={field.name}
                  onValueChange={(value) => {
                    const index = categories.findIndex(
                      (category) => category.category === value,
                    );

                    form.setValue("subCategory", "");

                    setSubCategoryIndex(index.toString());
                    return field.onChange(value);
                  }}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map(({ category }) => (
                      <SelectItem value={category} key={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription className="text-xs text-muted-foreground">
                  Product Category
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subCategory"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>{capitalFirstLetter(field.name)}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  name={field.name}
                  value={field.value}
                  disabled={!subCategoryIndex}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          subCategoryIndex
                            ? categories[parseInt(subCategoryIndex)]
                                .subCategories[0]
                            : "Select a sub category"
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {subCategoryIndex &&
                      categories[parseInt(subCategoryIndex)].subCategories.map(
                        (subCategory, index) => (
                          <SelectItem value={subCategory} key={index}>
                            {subCategory}
                          </SelectItem>
                        ),
                      )}
                  </SelectContent>
                </Select>
                <FormDescription className="text-xs text-muted-foreground">
                  Product sub category
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="condition"
            render={({ field }) => (
              <FormItem className="flex-1">
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
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Used">Used</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription className="text-xs text-muted-foreground">
                  Product Condition
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-12 customSm:flex-col md:flex-row">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>{capitalFirstLetter(field.name)} ($) </FormLabel>
                <FormControl>
                  <Input placeholder="your price" {...field} />
                </FormControl>
                <FormDescription className="text-muted-foreground">
                  Buy it now price
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>{capitalFirstLetter(field.name)}</FormLabel>
                <FormControl>
                  <Input placeholder="your stock" {...field} />
                </FormControl>
                <FormDescription className="text-muted-foreground">
                  Product Availability
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="discount"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  {capitalFirstLetter(field.name)} e.g. 5% (optional)
                </FormLabel>
                <FormControl>
                  <Input placeholder="your discount" {...field} />
                </FormControl>
                <FormDescription className="text-muted-foreground">
                  Add your discount
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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
                  {...fileRef}
                  // onChange={handleImageOnChange}
                  onChangeCapture={handleImageOnChange}
                />
              </FormControl>
              {productImage ? (
                <Image
                  height={150}
                  width={150}
                  src={typeof productImage === "string" ? productImage : ""}
                  alt="preview"
                />
              ) : (
                <FormDescription>Drag your product image here</FormDescription>
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
