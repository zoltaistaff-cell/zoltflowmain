import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Terms of Service | David Zolt Agency",
  description: "Terms of Service for ZoltFlow AI automation services for dental practices.",
}

export default function TermsPage() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="ZoltFlow logo"
              width={24}
              height={24}
              className="rounded-md object-contain"
            />
            <span className="font-heading text-sm font-semibold tracking-tight">ZoltFlow</span>
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">1. Services</h2>
            <p>
              We provide AI automation, lead generation workflows, and systems integration specifically designed for dental practices. Our services include AI patient handoff systems, appointment booking automation, follow-up sequences, and practice management software integration.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">2. Use Case</h2>
            <p>
              Our tools are built to help beginner-friendly practices scale. Clients agree to provide accurate setup data and maintain compliance with local healthcare marketing regulations. You are responsible for ensuring that any automated communications comply with applicable laws in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">3. Liability</h2>
            <p>
              All automation systems are delivered as optimized structures. Final operational oversight remains with the practice ownership. We are not liable for any decisions made based on automated outputs, nor for any interruptions in third-party services that our systems integrate with.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-border/60 pt-8">
          <Link
            href="/"
            className="text-sm text-primary transition-colors hover:text-primary/80"
          >
            &larr; Back to home
          </Link>
        </div>
      </article>
    </main>
  )
}
