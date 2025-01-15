"use client";

import { SubmitButton } from "@/components/submit-btn";
import { useFormStatus } from "react-dom";

export default function AddToCartAndWishListBtn({
  buttonText,
}: {
  buttonText: string;
}) {
  const { pending } = useFormStatus();

  return (
    <SubmitButton
      className={`w-full text-white dark:text-white ${buttonText === "Add to Cart" ? "bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500" : "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black"}`}
      isLoading={pending}
      loadingText="Adding..."
    >
      {buttonText}
    </SubmitButton>
  );
}
