import { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function PageFrame({
  active,
  children,
}: {
  active: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader active={active} />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
