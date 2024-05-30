import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getSession } from "@/lib/auth";
import { formatCurrency } from "@/lib/currencyFormatter";
import db from "@/lib/db";

export async function ProductTable() {
  // const session = await getSession();
  const products = await db.product.findMany();

  return (
    <Table>
      <TableCaption>A list of your products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Product Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="">Price</TableHead>
          <TableHead className="">List Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map(({ id, title, price, category, createdAt }) => (
          <TableRow key={id}>
            <TableCell className="font-medium">{id}</TableCell>
            <TableCell className="truncate-cell">
              {title}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              earum quo quas sit quos cum.
            </TableCell>
            <TableCell>{category}</TableCell>
            <TableCell className="">
              {formatCurrency(parseFloat(price))}
            </TableCell>
            <TableCell className="">CreatedAt</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
