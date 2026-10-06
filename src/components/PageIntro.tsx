import type { ReactNode } from "react";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function PageIntro({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <Container as="header" className="pt-10 pb-8 md:pt-14 md:pb-10">
      <SectionTitle as="h1">{title}</SectionTitle>
      {lead ? <p className="copy mt-6 max-w-3xl">{lead}</p> : null}
      {children}
    </Container>
  );
}
