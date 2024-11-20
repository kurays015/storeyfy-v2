import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatCurrency } from "@/lib/currencyFormatter";
import { format } from "date-fns";
import Link from "next/link";
import deleteItemFromTable from "@/app/my-products/_actions/action";

type ProductTableColumn = {
  id: string;
  title: string;
  description: string;
  category: string;
  subCategory: string;
  price: string;
};

export const columns: ColumnDef<ProductTableColumn>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "title",
    header: () => <div>Title</div>,
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "category",
    header: () => {
      return <div>Category</div>;
    },
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },
  {
    accessorKey: "subCategory",
    header: () => {
      return <div>Sub-Category</div>;
    },
    cell: ({ row }) => <div>{row.getValue("subCategory")}</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <Button
        className="px-0"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));

      return <div className="font-medium">{formatCurrency(price)}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div>List Date</div>,
    cell: ({ row }) => {
      const parsedDate = new Date(row.getValue("createdAt"));

      const formattedDate = format(parsedDate, "MMMM do, yyyy h:mm:ss a");

      return <div className="font-medium">{formattedDate}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      //the Product[] data
      const product = row.original;

      async function handleDelete(e: React.MouseEvent) {
        deleteItemFromTable(product.id);
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link
              href={`/product/${product.category}/${product.subCategory}/${product.id}`}
            >
              <DropdownMenuItem>View</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
