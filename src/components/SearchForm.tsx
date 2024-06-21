import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";

export default function SearchForm() {
  return (
    <form className="relative flex flex-1">
      <Input
        type="search"
        placeholder="Search a product..."
        className="w-full"
      />
      <Button type="submit" className="absolute right-0 bg-transparent">
        <CiSearch className="text-lg text-black dark:text-white" />
      </Button>
    </form>
  );
}
