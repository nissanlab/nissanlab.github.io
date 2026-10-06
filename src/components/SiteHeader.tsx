"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Container from "@/components/Container";
import { nav, site } from "@/data/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-surface/95 backdrop-blur">
      <Container width="wide" className="flex h-[76px] items-center gap-5 md:h-[92px] md:gap-8">
        {/* Institutional lockup */}
        <div className="hidden shrink-0 items-center gap-5 pr-6 md:flex md:border-r md:border-line">
          <Image
            src="/images/logos/huji-horizontal.png"
            alt={site.university}
            width={1738}
            height={591}
            className="h-10 w-auto lg:h-12"
            priority
          />
        </div>

        {/* Lab lockup */}
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${site.name}, home`}>
          <LabMark />
          <span className="min-w-0">
            <span className="block truncate text-[1.0625rem] font-bold tracking-tight text-text md:text-lg">
              {site.name}
            </span>
            <span className="block truncate text-[0.8125rem] text-text-3">{site.subtitle}</span>
          </span>
        </Link>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block py-2 text-[0.9375rem] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:text-brand hover:after:scale-x-100 ${
                      active ? "text-text after:scale-x-100" : "text-text-2"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={menuButton}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="ml-auto flex size-11 shrink-0 items-center justify-center rounded-full text-text lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex h-3.5 w-5 flex-col justify-between">
            <span
              className={`block h-0.5 w-full rounded bg-current transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded bg-current transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-line bg-surface lg:hidden">
          <Container width="wide" className="py-2">
            <nav aria-label="Main (mobile)">
              <ul className="divide-y divide-line">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`block py-3.5 text-lg font-medium ${
                        isActive(item.href) ? "text-brand" : "text-text"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <a className="btn-brand my-5" href={`mailto:${site.email}`}>
              Contact
              <Chevron />
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function Chevron() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Lab mark: a soil core with a path threading past two grains, for the lab's
 * subject, how water finds its way through a porous medium. Drawn here rather
 * than shipped as an image so it inherits the accent colour. Keep this and
 * src/app/icon.svg in step; they are the same drawing.
 */
function LabMark() {
  return (
    <svg aria-hidden viewBox="0 0 44 44" className="size-9 shrink-0 md:size-10" fill="none">
      <circle cx="22" cy="22" r="18.2" className="stroke-brand/25" strokeWidth="1.7" />
      <circle cx="31.5" cy="13" r="5.4" className="fill-brand/20" />
      <circle cx="12" cy="30.5" r="5.4" className="fill-brand/20" />
      <path
        d="M22 3.8c0 6.4-6.8 6.4-6.8 11.8s13.6 5.4 13.6 10.8-6.8 6-6.8 13.6"
        className="stroke-brand"
        strokeWidth="2.9"
        strokeLinecap="round"
      />
    </svg>
  );
}
