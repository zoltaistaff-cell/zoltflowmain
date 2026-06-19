import { Card } from "@/components/ui/card"
import { Phone, Calendar, MessageSquare, Bell, FileText, ShieldCheck } from "lucide-react"

export function OffersBento() {
  return (
    <section id="services" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">What we build</p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Three systems to stop losing patients to voicemail.
          </h2>
        </div>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-3">
          <Card className="flex flex-col justify-between border-border/60 bg-card/60 p-8 md:col-span-2 md:row-span-2">
            <div>
              <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Phone className="size-5" />
              </div>
              <h3 className="font-heading text-2xl font-semibold tracking-tight">AI Patient Handoff</h3>
              <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Every call gets answered, even when your front desk is busy or the office is closed. Our AI handles the conversation, books directly into your practice software, and notifies your team in real time.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Phone, text: "Missed calls answered automatically" },
                { icon: Calendar, text: "Appointments booked 24/7" },
                { icon: MessageSquare, text: "Voicemails transcribed & forwarded" },
                { icon: ShieldCheck, text: "HIPAA-conscious design" },
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
              <Bell className="size-5" />
            </div>
            <h3 className="font-heading text-xl font-semibold tracking-tight">Appointment Reminders</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Automatic SMS and email reminders reduce no-shows. If a patient needs to reschedule, they can do it without calling your office.
            </p>
          </Card>

          <Card className="border-border/60 bg-card/60 p-8">
            <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
              <FileText className="size-5" />
            </div>
            <h3 className="font-heading text-xl font-semibold tracking-tight">Follow-Up Automation</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              When patients miss appointments, we follow up automatically. Recare reminders, outstanding treatment outreach, and reactivation campaigns keep your schedule full.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
