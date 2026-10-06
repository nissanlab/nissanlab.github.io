import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import { institutionalLinks, nav, profileLinks, site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-surface md:mt-24">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-lg font-bold tracking-tight text-text">{site.name}</p>
            <p className="text-[0.9375rem] text-text-3">{site.subtitle}</p>
            <address className="mt-5 space-y-0.5 text-[0.875rem] not-italic text-text-2">
              {site.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 space-x-4 text-[0.875rem]">
              <a className="text-brand hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className="text-brand hover:underline" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                {site.phone}
              </a>
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.14em] text-text-3 uppercase">Pages</h2>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link className="text-text-2 hover:text-brand" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="text-xs font-semibold tracking-[0.14em] text-text-3 uppercase">
              Affiliation
            </h2>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              {institutionalLinks.map((item) => (
                <li key={item.href}>
                  <a
                    className="text-text-2 hover:text-brand"
                    href={item.href}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <h2 className="mt-6 text-xs font-semibold tracking-[0.14em] text-text-3 uppercase">
              Profiles
            </h2>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              {profileLinks.map((item) => (
                <li key={item.href}>
                  <a
                    className="text-text-2 hover:text-brand"
                    href={item.href}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
          <div className="flex items-center gap-6">
            <Image
              src="/images/logos/huji-horizontal.png"
              alt={site.university}
              width={1738}
              height={591}
              className="h-10 w-auto"
            />
            <Image
              src="/images/logos/faculty-agriculture.png"
              alt={site.faculty}
              width={258}
              height={297}
              className="h-12 w-auto"
            />
          </div>
          <p className="text-xs text-text-3">
            © {new Date().getFullYear()} {site.name}, {site.university}
          </p>
        </div>
      </Container>
    </footer>
  );
}
