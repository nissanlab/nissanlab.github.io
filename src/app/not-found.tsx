import Link from "next/link";

import Chevron from "@/components/Chevron";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center md:py-32">
      <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">404</p>
      <h1 className="mt-3 text-title font-bold tracking-tight text-text">Page not found</h1>
      <p className="mx-auto mt-3 max-w-md text-[0.9375rem] text-text-2">
        The page you asked for does not exist, or has moved.
      </p>
      <Link href="/" className="btn-brand mt-6">
        Back to the home page
        <Chevron className="size-4" />
      </Link>
    </Container>
  );
}
