import type { ReactNode } from "react";

/** Shared heading with restrained editorial typography. */
export default function SectionTitle({
  children,
  align = "left",
  as: Tag = "h2",
  className = "",
  id,
}: {
  children: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <Tag
        id={id}
        className="inline-block text-section leading-tight font-bold tracking-tight text-text"
      >
        {children}
        <span aria-hidden className="mt-2 block h-[3px] w-14 rounded-full bg-brand" />
      </Tag>
    </div>
  );
}
