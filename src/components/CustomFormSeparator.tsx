import { Separator } from "@/components/ui/separator";
import { CustomFormSeparatorProps } from "@/types";

export default function CustomFormSeperator({
  className,
  width,
  text,
}: CustomFormSeparatorProps) {
  return (
    <div className={className}>
      <Separator className={width} />
      <p>{text}</p>
      <Separator className={width} />
    </div>
  );
}
