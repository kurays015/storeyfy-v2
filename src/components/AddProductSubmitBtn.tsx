import { useFormStatus } from "react-dom";
import { SubmitButton } from "./SubmitButton";

export default function AddProductSubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <SubmitButton isLoading={pending} loadingText="Listing...">
      List product
    </SubmitButton>
  );
}
