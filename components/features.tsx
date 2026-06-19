import { Gauge, Lock, Puzzle, Headphones } from "lucide-react"

const features = [
  {
    icon: Gauge,
    title: "Set up in days, not months",
    body: "Your AI patient handoff goes live quickly. We handle configuration, testing, and training with your team.",
  },
  {
    icon: Puzzle,
    title: "Works with your practice software",
    body: "Integrates with Dentrix, Eaglesoft, Open Dental, Curve Dental, and most major platforms. Not seeing yours? Ask us.",
  },
  {
    icon: Headphones,
    title: "Your staff trained in one session",
    body: "We walk your team through how it works, what calls it handles, and when it escalates to a human. No technical knowledge needed.",
  },
  {
    icon: Lock,
    title: "HIPAA-conscious design",
    body: "Built with privacy-first handling of patient information. Data minimization, encrypted transmission, no unnecessary storage.",
  },
]

export function Features() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">How we operate</p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            We handle setup. Your team gets more time.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            You don&apos;t need to be technical. We configure everything, connect your software, and train your staff.
          </p>
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
