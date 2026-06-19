import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Privacy Policy | David Zolt Agency",
  description: "Privacy Policy for ZoltFlow AI automation services for dental practices.",
}

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">1. Data Collection</h2>
            <p>
              We collect minimal operational data necessary to configure your automated workflows (e.g., practice contact info, standard lead capture metrics). We do not collect data beyond what is required to deliver and maintain your automation systems.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">2. Patient Data Protection</h2>
            <p>
              Our AI systems do not store, distribute, or retain protected patient health records (PHI). All data pipelines are configured using secure, end-to-end encrypted API keys. We design our systems with HIPAA-conscious principles at every layer.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">3. Third-Party Tools</h2>
            <p>
              We integrate secure infrastructure (Google Sheets, custom webhooks, n8n) managed entirely under industry-standard cloud security practices. All third-party integrations are configured with minimal-access permissions and encrypted transport.
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
