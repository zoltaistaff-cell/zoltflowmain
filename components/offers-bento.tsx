import { Card } from "@/components/ui/card"
import { Workflow, Database, Send, LineChart, GitBranch, ShieldCheck } from "lucide-react"

export function OffersBento() {
  return (
    <section id="offers" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">What we build</p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Three systems. One compounding revenue engine.
          </h2>
        </div>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-3">
          {/* Large feature card */}
          <Card className="flex flex-col justify-between border-border/60 bg-card/60 p-8 md:col-span-2 md:row-span-2">
            <div>
              <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Workflow className="size-5" />
              </div>
              <h3 className="font-heading text-2xl font-semibold tracking-tight">Automation Architecture</h3>
              <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
                We map every manual handoff in your go-to-market motion and replace it with reliable, observable
                automation—so your team stops copy-pasting and starts closing.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: GitBranch, text: "Lead routing & enrichment" },
                { icon: Send, text: "Outbound sequencing at scale" },
                { icon: Database, text: "CRM hygiene & sync" },
                { icon: ShieldCheck, text: "Guardrails & monitoring" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm text-foreground">
                  <item.icon className="size-4 shrink-0 text-primary" />
                  {item.text}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="border-border/60 bg-card/60 p-8">
            <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
              <Database className="size-5" />
            </div>
            <h3 className="font-heading text-xl font-semibold tracking-tight">Revenue Data Layer</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A single source of truth—warehouse, attribution, and dashboards your whole team actually trusts.
            </p>
          </Card>

          <Card className="border-border/60 bg-card/60 p-8">
            <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
              <LineChart className="size-5" />
            </div>
            <h3 className="font-heading text-xl font-semibold tracking-tight">Outbound Infrastructure</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Deliverability-safe sending, intent signals, and a pipeline that fills itself while you sleep.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
