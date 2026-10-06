import Link from "next/link";

import Chevron from "@/components/Chevron";

export default function ArrowLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  const classes = `link-brand ${className}`;
  const inner = (
    <>
      {children}
      <Chevron className="size-3.5" />
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href} rel="noreferrer noopener" target="_blank">
        {inner}
      </a>
    );
  }
  return (
    <Link className={classes} href={href}>
      {inner}
    </Link>
  );
}
