import { Card } from "@/components/ui/card"
import { TrendingUp, PhoneOff, Clock, Calendar } from "lucide-react"

const targetOutcomes = [
  {
    icon: PhoneOff,
    title: "Missed calls handled",
    description: "Every after-hours and overflow call answered. No voicemail, no lost patients.",
  },
  {
    icon: Calendar,
    title: "More appointments booked",
    description: "Patients book directly through conversation, even when your office is closed.",
  },
  {
    icon: Clock,
    title: "Hours returned to your team",
    description: "Your front desk focuses on patients in the office, not tied to the phones.",
  },
  {
    icon: TrendingUp,
    title: "Reduced no-shows",
    description: "Automatic reminders and easy rescheduling keep your schedule full.",
  },
]

export function CaseStudies() {
  return (
    <section id="results" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">What to expect</p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            We&apos;re building our first dental case studies.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Here&apos;s what we typically see in similar implementations. On your discovery call, we&apos;ll estimate specific numbers for your practice based on your call volume and current setup.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {targetOutcomes.map((outcome) => (
            <Card
              key={outcome.title}
              className="group gap-0 border-border/60 bg-card/60 p-8 transition-colors hover:border-primary/40"
            >
              <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <outcome.icon className="size-5" />
              </div>
              <h3 className="font-heading font-semibold tracking-tight text-foreground">
                {outcome.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {outcome.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/[0.04] p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Want to be among our first dental case studies? <span className="text-foreground font-medium">We&apos;re offering priority implementation to our founding practices.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
