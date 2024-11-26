"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { useDebouncedCallback } from "use-debounce";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((query) => {
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }

    replace(`/search?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1">
      <Input
        type="text"
        placeholder="Search a product..."
        className="w-full"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <Button variant="ghost" type="submit" className="absolute right-0">
        <CiSearch className="text-lg text-black dark:text-white" />
      </Button>
    </div>
  );
}
