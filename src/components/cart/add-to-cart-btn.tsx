"use client";

import { SubmitButton } from "@/components/submit-btn";
import { useFormStatus } from "react-dom";

export default function AddToCartBtn() {
  const { pending } = useFormStatus();

  return (
    <SubmitButton
      className="w-full bg-red-500 text-white hover:bg-red-700"
      isLoading={pending}
      loadingText="Adding..."
    >
      Add to Cart
    </SubmitButton>
  );
}
