import Image from "next/image";

import type { Person } from "@/data/people";

function Portrait({ person, className }: { person: Person; className: string }) {
  if (person.photo) {
    return (
      <Image
        src={person.photo}
        alt={`Portrait of ${person.name}`}
        width={800}
        height={1000}
        sizes="(min-width: 768px) 240px, 45vw"
        className={`${className} object-cover`}
      />
    );
  }
  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
  return (
    <div className={`${className} flex items-center justify-center bg-brand-wash`}>
      <span aria-hidden className="text-2xl font-semibold text-brand/70">
        {initials}
      </span>
    </div>
  );
}

function Detail({ icon, children }: { icon: "mail" | "phone" | "pin" | "link"; children: React.ReactNode }) {
  const paths = {
    mail: "M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9Zm1.2.3 7.05 5.03a1.3 1.3 0 0 0 1.5 0L19.8 7.8",
    phone:
      "M4 6c0-1.1.9-2 2-2h1.6c.5 0 .9.3 1 .8l.8 3a1 1 0 0 1-.3 1L8 10a12 12 0 0 0 6 6l1.2-1.1a1 1 0 0 1 1-.3l3 .8c.5.1.8.5.8 1V18a2 2 0 0 1-2 2h-1C9.8 20 4 14.2 4 7V6Z",
    pin: "M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
    link: "M10 13a5 5 0 0 0 7.1 0l2.4-2.4a5 5 0 0 0-7.1-7.1L11 4.9M14 11a5 5 0 0 0-7.1 0L4.5 13.4a5 5 0 0 0 7.1 7.1L13 19.1",
  };
  return (
    <li className="flex items-start gap-2">
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="mt-0.5 size-4 shrink-0 text-brand"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={paths[icon]} />
      </svg>
      <span className="min-w-0 break-words">{children}</span>
    </li>
  );
}

export default function PersonCard({
  person,
  featured = false,
}: {
  person: Person;
  /** The PI block: bigger portrait, more room for text. */
  featured?: boolean;
}) {
  return (
    <article
      className={
        featured
          ? "grid gap-6 sm:grid-cols-[minmax(0,260px)_1fr] sm:gap-10"
          : "grid grid-cols-[96px_1fr] gap-4 sm:grid-cols-[120px_1fr] sm:gap-5"
      }
    >
      <Portrait
        person={person}
        className={
          featured
            ? "aspect-4/5 w-full rounded-media"
            : "aspect-4/5 w-full rounded-[0.75rem]"
        }
      />
      <div className="min-w-0">
        <h3
          className={`font-bold tracking-tight text-text ${featured ? "text-2xl" : "text-[1.0625rem]"}`}
        >
          {person.name}
        </h3>
        <p className={`text-text-2 ${featured ? "mt-0.5 text-base" : "text-sm"}`}>{person.role}</p>
        {person.research ? (
          <p className="mt-2.5 text-[0.875rem] leading-relaxed text-text-2">{person.research}</p>
        ) : null}
        <ul className="mt-3 space-y-1.5 text-[0.8125rem] text-text-2">
          {person.email ? (
            <Detail icon="mail">
              <a className="hover:text-brand hover:underline" href={`mailto:${person.email}`}>
                {person.email}
              </a>
            </Detail>
          ) : null}
          {person.phone ? (
            <Detail icon="phone">
              <a className="hover:text-brand hover:underline" href={`tel:${person.phone.replace(/\s/g, "")}`}>
                {person.phone}
              </a>
            </Detail>
          ) : null}
          {person.office ? <Detail icon="pin">{person.office}</Detail> : null}
          {person.link ? (
            <Detail icon="link">
              <a
                className="hover:text-brand hover:underline"
                href={person.link.href}
                rel="noreferrer noopener"
                target="_blank"
              >
                {person.link.label}
              </a>
            </Detail>
          ) : null}
        </ul>
      </div>
    </article>
  );
}
