"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCta() {
  const scrollToAudit = () => {
    document.querySelector("#audit")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-primary/[0.07] px-8 py-16 text-center md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Stop hiring to fix what a system should handle.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              We take on a small number of operators each quarter. If you&apos;re serious about compounding revenue
              without compounding headcount, start with an audit.
            </p>
            <Button onClick={scrollToAudit} size="lg" className="group mt-9 rounded-full px-8 text-base">
              Book your systems audit
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
