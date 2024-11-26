"use client";
import { MdDelete } from "react-icons/md";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "@/components/submit-btn";

export default function DeleteCartItemBtn() {
  const { pending } = useFormStatus();
  return (
    <SubmitButton
      loadingText=""
      variant="unstyled"
      isLoading={pending}
      className="absolute right-1 top-0 text-red-600"
    >
      <MdDelete />
    </SubmitButton>
  );
}
