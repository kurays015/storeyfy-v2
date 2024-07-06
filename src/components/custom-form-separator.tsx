export default function CustomFormSeperator({ text }: { text: string }) {
  return (
    <div className="my-6 flex w-full items-center justify-center">
      <div className="flex-1 border"></div>
      <span className="mx-4 text-sm text-slate-600 dark:text-slate-300">
        {text}
      </span>
      <div className="flex-1 border"></div>
    </div>
  );
}
