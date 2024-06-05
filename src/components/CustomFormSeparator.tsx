import { Separator } from "./ui/separator";

type CustomFormSeparatorProps = {
  className: string;
  width: string;
  text: string;
};

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
