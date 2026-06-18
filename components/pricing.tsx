"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Sprint",
    summary: "A single high-leverage system, scoped and shipped end to end.",
    features: [
      "One core system (automation, data, or outbound)",
      "Direct access to senior operators",
      "Full documentation & handover",
      "30 days of post-launch support",
    ],
    cta: "Apply for a Sprint",
    featured: false,
  },
  {
    name: "Partner",
    summary: "An embedded engagement that compounds across your entire revenue motion.",
    features: [
      "All three systems, sequenced over time",
      "Weekly working sessions with the build team",
      "Ongoing iteration against live performance",
      "Priority roadmap & dedicated channel",
      "Quarterly systems audit included",
    ],
    cta: "Apply to Partner",
    featured: true,
  },
]

export function Pricing() {
  const scrollToAudit = () => {
    document.querySelector("#audit")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Engagement</p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            We work with a handful of operators at a time.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Engagements are application-only and priced per outcome. We&apos;ll scope the right fit on your audit
            call—no public rate cards, no one-size pricing.
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
                    Most chosen
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
                onClick={scrollToAudit}
                variant={tier.featured ? "default" : "outline"}
                size="lg"
                className="w-full rounded-full"
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
