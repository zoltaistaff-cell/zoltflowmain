import { Card } from "@/components/ui/card"

const metrics = [
  {
    value: "$4.2M",
    label: "Net new pipeline generated",
    detail: "Built an outbound + enrichment system for a 9-person SaaS team. 11 months, zero new SDR hires.",
    tag: "B2B SaaS",
  },
  {
    value: "63%",
    label: "Reduction in manual ops hours",
    detail: "Replaced a 40-tab spreadsheet workflow with automated routing and reporting for an agency operator.",
    tag: "Services",
  },
  {
    value: "3.1x",
    label: "Increase in qualified meetings",
    detail: "Re-architected lead scoring and handoff so reps only touched deals worth their time.",
    tag: "Fintech",
  },
  {
    value: "18 days",
    label: "From kickoff to live system",
    detail: "Shipped a full revenue data layer—warehouse, attribution, dashboards—in under three weeks.",
    tag: "Marketplace",
  },
]

const logos = ["NORTHWIND", "APEX LABS", "MERIDIAN", "OUTLIER", "BASECAMP", "VECTORA"]

export function CaseStudies() {
  return (
    <section id="results" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Proof, not promises</p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Systems that moved the only number that matters.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {metrics.map((m) => (
            <Card
              key={m.label}
              className="group gap-0 border-border/60 bg-card/60 p-8 transition-colors hover:border-primary/40"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-heading text-5xl font-semibold tracking-tight text-foreground">{m.value}</span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {m.tag}
                </span>
              </div>
              <p className="font-medium text-foreground">{m.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <p className="mb-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
            Trusted by operators at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-50">
            {logos.map((logo) => (
              <span key={logo} className="font-heading text-sm font-semibold tracking-widest text-muted-foreground">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
