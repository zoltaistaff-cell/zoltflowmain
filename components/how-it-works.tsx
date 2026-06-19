import { Phone, Bot, Calendar, MessageSquare, Users, CircleCheck as CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Phone,
    title: "Patient calls your office",
    description: "Any time of day or night, weekday or weekend.",
  },
  {
    icon: Bot,
    title: "AI answers within 3 rings",
    description: "A natural voice, not a frustrating menu tree.",
  },
  {
    icon: Calendar,
    title: "Appointment booked directly",
    description: "Syncs to your practice software in real time.",
  },
  {
    icon: MessageSquare,
    title: "Confirmation sent automatically",
    description: "Patient receives SMS and email confirmation.",
  },
  {
    icon: Users,
    title: "Your team stays informed",
    description: "Get notified of new bookings and urgent matters.",
  },
  {
    icon: CheckCircle,
    title: "Patient shows up",
    description: "Or if they don't, we follow up automatically.",
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">How it works</p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            From missed call to booked patient, without lifting a finger.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Here&apos;s what happens when a patient calls after hours or when your front desk is tied up.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group flex gap-4 rounded-xl border border-border/60 bg-card/40 p-6 transition-colors hover:border-primary/30 hover:bg-card/60"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-sm font-medium text-muted-foreground">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <step.icon className="size-4" />
                </div>
                <h3 className="font-heading font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/[0.04] p-6 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Complex or urgent?</span> Those calls get forwarded to your team immediately with full context. You always stay in control.
          </p>
        </div>
      </div>
    </section>
  )
}
