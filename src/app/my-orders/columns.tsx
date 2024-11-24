"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatCurrency } from "@/lib/currencyFormatter";
import { format } from "date-fns";
import Link from "next/link";
import { ProductTableColumn } from "@/types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import deleteOrder from "@/app/my-orders/_actions/action";

export const columns: ColumnDef<ProductTableColumn>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "orderId",
    header: "Order ID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("orderId")}</div>
    ),
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">
        <Badge className="bg-green-600 text-white" variant="outline">
          {row.getValue("status")}
        </Badge>
      </div>
    ),
  },

  {
    accessorKey: "title",
    header: () => <div>Title</div>,
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "image",
    header: () => {
      return <div>Image</div>;
    },
    cell: ({ row }) => (
      <div>
        <Image
          src={row.getValue("image")}
          alt={row.getValue("title")}
          width={60}
          height={60}
          className="max-h-14 rounded-md object-contain"
        />
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: () => {
      return <div>Qty</div>;
    },
    cell: ({ row }) => <div className="ml-2">{row.getValue("quantity")}</div>,
  },
  {
    accessorKey: "category",
    header: () => {
      return <div>Category</div>;
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("category")}</div>
    ),
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
    accessorKey: "orderDate",
    header: () => <div>Order Date</div>,
    cell: ({ row }) => {
      const parsedDate = new Date(row.getValue("orderDate"));

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
        deleteOrder(row.getValue("orderId"));
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
              <DropdownMenuItem>View product</DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
