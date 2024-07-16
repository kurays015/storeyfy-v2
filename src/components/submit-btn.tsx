import { Button } from "@/components/ui/button";
import { SubmitButtonProps } from "@/types";
import { LoaderIcon } from "lucide-react";

export function SubmitButton({
  isLoading,
  children,
  loadingText,
  onClick,
  className,
  variant,
}: SubmitButtonProps) {
  return (
    <Button
      variant={variant}
      className={`flex items-center gap-1 ${className}`}
      disabled={isLoading}
      type="submit"
      onClick={(e) => {
        onClick?.(e);
      }}
    >
      {isLoading && <LoaderIcon className="animate-spin" />}
      {isLoading ? loadingText : children}
    </Button>
  );
}
