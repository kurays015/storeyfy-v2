import { useFormStatus } from "react-dom";
import { LoaderIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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
