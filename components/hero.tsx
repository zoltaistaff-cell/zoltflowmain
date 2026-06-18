"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToAudit = () => {
    document.querySelector("#audit")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Accepting 3 new partners this quarter
          </div>

          <h1 className="font-heading text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Revenue systems for teams that refuse to scale headcount.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We engineer the automation, data pipelines, and outbound infrastructure that let lean operators compound
            revenue—without adding bodies, agencies, or busywork.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button onClick={scrollToAudit} size="lg" className="group rounded-full px-7 text-base">
              Book your systems audit
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <span className="text-sm text-muted-foreground">No pitch. A working teardown of your funnel.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
