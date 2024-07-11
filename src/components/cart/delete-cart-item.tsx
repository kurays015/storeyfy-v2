"use client";
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "../submit-btn";

export default function DeleteCartItem() {
  const { pending } = useFormStatus();
  return (
    <SubmitButton
      loadingText=""
      variant="unstyled"
      isLoading={pending}
      className="absolute -right-4 -top-4 text-red-600"
    >
      <MdDelete />
    </SubmitButton>
  );
}
