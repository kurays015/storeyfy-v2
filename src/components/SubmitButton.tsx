import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
import { MouseEvent, ReactNode } from "react";

export function SubmitButton({
  isLoading,
  children,
  loadingText,
  onClick,
  className,
}: {
  isLoading: boolean;
  children: ReactNode;
  loadingText: string;
  className: string;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}) {
  return (
    <Button
      className={`flex gap-1 items-center ${className}`}
      disabled={isLoading}
      type="submit"
      onClick={e => {
        onClick?.(e);
      }}
    >
      {isLoading && <LoaderIcon className="animate-spin" />}
      {isLoading ? loadingText : children}
    </Button>
  );
}
