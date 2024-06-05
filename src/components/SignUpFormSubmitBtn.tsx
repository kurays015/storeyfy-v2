import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { LoaderIcon } from "lucide-react";

export default function SignUpFormSubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-green-700 hover:bg-green-600 dark:text-slate-300 font-bold"
    >
      {pending ? (
        <>
          <LoaderIcon className="animate-spin mr-1" />
          Signing up...
        </>
      ) : (
        "Sign up"
      )}
    </Button>
  );
}
