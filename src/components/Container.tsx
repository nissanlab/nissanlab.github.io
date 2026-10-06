import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
  as: Tag = "div",
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "article";
  /** "default" is the page grid; "text" is the narrower reading column. */
  width?: "default" | "text" | "wide";
}) {
  const max =
    width === "text" ? "max-w-[860px]" : width === "wide" ? "max-w-[1440px]" : "max-w-[1240px]";
  return (
    <Tag className={`mx-auto w-full ${max} px-5 sm:px-8 ${className}`}>{children}</Tag>
  );
}
