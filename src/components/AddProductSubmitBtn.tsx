import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { LoaderIcon } from "lucide-react";

export default function AddProductSubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <LoaderIcon className="animate-spin mr-1" />
          Listing...
        </>
      ) : (
        "List product"
      )}
    </Button>
  );
}
