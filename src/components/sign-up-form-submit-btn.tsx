import { useFormStatus } from "react-dom";
import { SubmitButton } from "@/components/submit-btn";

export default function SignUpFormSubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <SubmitButton
      isLoading={pending}
      loadingText="Signing up..."
      className="bg-green-700 font-bold hover:bg-green-600 dark:text-slate-300"
    >
      Sign up
    </SubmitButton>
  );
}
