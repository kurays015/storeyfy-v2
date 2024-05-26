import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function AddProductSubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Adding" : "Add product"}
    </Button>
  );
}
