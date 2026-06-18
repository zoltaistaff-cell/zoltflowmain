import { Gauge, Lock, Puzzle, Users } from "lucide-react"

const features = [
  {
    icon: Gauge,
    title: "Built in weeks, not quarters",
    body: "We ship working systems fast, then iterate against live data—no six-month discovery decks.",
  },
  {
    icon: Puzzle,
    title: "Fits your existing stack",
    body: "We work inside the tools you already pay for. No rip-and-replace, no vendor lock-in.",
  },
  {
    icon: Users,
    title: "Senior operators only",
    body: "You work directly with the people building your systems. No junior account managers in between.",
  },
  {
    icon: Lock,
    title: "Documented & owned by you",
    body: "Every system is documented and handed over. When we leave, the engine stays yours.",
  },
]

export function Features() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">How we operate</p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            A partner, engineered to make itself unnecessary.
          </h2>
        </div>

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card/60 text-primary">
                <f.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
