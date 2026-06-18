import type { Metadata } from "next"
import { CursorGlow } from "@/components/cursor-glow"
import { IntakeForm } from "@/components/intake-form"
import { PhoneOff, ShieldCheck, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Apply — Zolt Flow",
  description:
    "Apply to deploy Zolt Flow's AI front desk for your dental and medical practice. Recover missed calls, book appointments 24/7, and never miss a patient again.",
}

const trustItems = [
  {
    icon: PhoneOff,
    title: "Zero missed calls",
    body: "Every inbound call answered in seconds, day or night — no voicemail, no lost patients.",
  },
  {
    icon: Clock,
    title: "24/7 scheduling",
    body: "Patients book, reschedule, and confirm around the clock, synced to your software.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-conscious",
    body: "Built with privacy-first handling of patient information at every step.",
  },
]

export default function ApplyPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-background">
      <CursorGlow />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-center px-6 py-8">
        <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
          Zolt Flow
        </span>
      </header>

      {/* Body */}
      <section className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-8 lg:grid-cols-2 lg:gap-16 lg:pt-16">
        {/* Value anchoring */}
        <div className="flex flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            By application only
          </p>
          <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Your AI front desk that never misses a patient.
          </h1>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Zolt Flow answers every call, books appointments, and follows up automatically — so
            your team stops drowning in the phones and your chairs stay full. Tell us about your
            practice and we&apos;ll map your recovered revenue on a call.
          </p>

          <ul className="mt-10 flex flex-col gap-6">
            {trustItems.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                  <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-medium text-foreground">{item.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Intake card */}
        <div className="flex flex-col justify-center">
          <IntakeForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Zolt Flow</span>
          <span>zolt.ai.staff@gmail.com</span>
        </div>
      </footer>
    </main>
  )
}
