"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
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
            Built for dental practices
          </div>

          <h1 className="font-heading text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Your AI receptionist that answers every call and fills your calendar.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Stop losing patients to voicemail. We set up AI that answers calls after hours, books appointments automatically, and follows up with patients so your front desk can breathe.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button onClick={scrollToContact} size="lg" className="group rounded-full px-7 text-base">
              See How It Works
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <span className="text-sm text-muted-foreground">15-minute call. We&apos;ll show you exactly what yours would handle.</span>
          </div>

          <div className="mt-20 border-t border-border/40 pt-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/50 mb-6">
              Compatible with all major practice management platforms
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm font-semibold tracking-tight text-muted-foreground/60 select-none">
              <span className="hover:text-foreground transition-colors duration-300 cursor-default">DENTRIX</span>
              <span className="hover:text-foreground transition-colors duration-300 cursor-default">EAGLESOFT</span>
              <span className="hover:text-foreground transition-colors duration-300 cursor-default">OPEN DENTAL</span>
              <span className="hover:text-foreground transition-colors duration-300 cursor-default">CURVE DENTAL</span>
              <span className="hover:text-foreground transition-colors duration-300 cursor-default">DENTICON</span>
              <span className="text-muted-foreground/30 font-normal">&amp; more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
