"use client";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

export function BreadCrumbs() {
  const pathname = usePathname();
  const splittedPathnames = pathname
    .split("/")
    .filter(
      (path) => path !== "" && !path.includes("-") && !path.includes("product"),
    );

  return (
    <Breadcrumb className="my-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {splittedPathnames.length > 0 && <BreadcrumbSeparator />}
        {splittedPathnames.map((path, index) => {
          const isLastPath = splittedPathnames.length === index + 1;

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {!isLastPath ? (
                  <BreadcrumbLink asChild>
                    <Link href={`/products/${path}`}>
                      {decodeURIComponent(path)}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{decodeURIComponent(path)}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLastPath && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
