"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "AI Patient Handoff",
    summary: "After-hours and overflow call handling with appointment booking.",
    features: [
      "24/7 call answering",
      "Appointments booked directly into your software",
      "Voicemail transcription and forwarding",
      "Staff training session",
      "30 days of support included",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Full Practice Automation",
    summary: "Complete patient communication system with reminders, follow-ups, and reactivation.",
    features: [
      "Everything in AI Patient Handoff",
      "Appointment reminder system (SMS & email)",
      "No-show follow-up automation",
      "Recare and reactivation campaigns",
      "Monthly performance review",
    ],
    cta: "Let's Talk",
    featured: false,
  },
]

export function Pricing() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Pricing</p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Two options, depending on what you need.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We&apos;ll discuss pricing on your call once we understand your call volume and requirements. No commitment until you know exactly what you&apos;re getting.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col p-8 ${
                tier.featured
                  ? "border-primary/50 bg-primary/[0.06] ring-1 ring-primary/20"
                  : "border-border/60 bg-card/60"
              }`}
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-heading text-2xl font-semibold tracking-tight">{tier.name}</h3>
                {tier.featured && (
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most practices start here
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{tier.summary}</p>

              <ul className="mt-7 grid gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex-1" />
              <Button
                onClick={scrollToContact}
                variant={tier.featured ? "default" : "outline"}
                size="lg"
                className="w-full rounded-full"
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border/60 bg-card/40 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Not sure which you need? <span className="text-foreground font-medium">We&apos;ll help you figure that out on the call.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
