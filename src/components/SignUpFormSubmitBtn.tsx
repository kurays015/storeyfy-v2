import { useFormStatus } from "react-dom";
import { SubmitButton } from "./SubmitButton";

export default function SignUpFormSubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <SubmitButton
      isLoading={pending}
      loadingText="Signing up..."
      className="bg-green-700 hover:bg-green-600 dark:text-slate-300 font-bold"
    >
      Sign up
    </SubmitButton>
  );
}
