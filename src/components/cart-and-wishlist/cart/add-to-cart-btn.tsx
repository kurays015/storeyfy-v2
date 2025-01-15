"use client";

import { SubmitButton } from "@/components/submit-btn";
import { useFormStatus } from "react-dom";

export default function AddToCartBtn() {
  const { pending } = useFormStatus();

  return (
    <SubmitButton
      className="w-full bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:text-white dark:hover:bg-green-500"
      isLoading={pending}
      loadingText="Adding..."
    >
      Add to Cart
    </SubmitButton>
  );
}
