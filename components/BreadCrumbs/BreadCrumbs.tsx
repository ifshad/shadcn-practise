"úse client";

import { usePathname } from "next/navigation";
import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadCrumbs() {
  const paths: string = usePathname();
  const pathNames: string[] = paths.split("/").filter((path) => path);
  // console.log(pathNames);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathNames.map((link, index) => {
          const href : string = `&{pathNames.slice(0, index+1).join('/')}`;
          const linkName : string = link[0].toUpperCase() + link.slice(1, link.length);
          const isLastPath : boolean = pathNames.length === index + 1;
          return (
            <Fragment key={index}>
              {!isLastPath ? (
                <BreadcrumbItem>
                  <BreadcrumbLink href={href}>{linkName}</BreadcrumbLink>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbPage>{linkName}</BreadcrumbPage>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
