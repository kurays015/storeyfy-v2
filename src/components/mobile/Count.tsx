export default function Count({ count }: { count: number }) {
  return (
    <div className="absolute -right-2 -top-3 w-4 rounded-full bg-red-500 px-1 text-center text-xs text-white">
      {count}
    </div>
  );
}
