import { useFormStatus } from "react-dom";
import { SubmitButton } from "./submit-btn";

export default function AddProductSubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <SubmitButton isLoading={pending} loadingText="Listing...">
      List product
    </SubmitButton>
  );
}
