export function FounderSection() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Why we exist</p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Built by operators who saw the problem firsthand.
          </h2>

          <div className="mt-8 space-y-6 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I spent years watching good businesses lose revenue to a problem that shouldn&apos;t exist: unanswered calls. Not because they didn&apos;t care, but because staffing a phone line 24/7 is impossible for most practices.
            </p>
            <p>
              AI changed what&apos;s possible. For the first time, a small team can offer the responsiveness of a 24/7 call center without the overhead. But most solutions are built for enterprises and priced accordingly.
            </p>
            <p>
              We started with dental practices because they need this most. Calls come in all day, emergencies happen after hours, and every missed call is a patient who books somewhere else. Your front desk team is already stretched thin. You shouldn&apos;t have to choose between answering phones and helping the patients in front of you.
            </p>
            <p className="text-foreground font-medium">
              ZoltFlow exists to make sure no patient slips through the cracks, and no dental team has to drown in phones to make it happen.
            </p>

            <div className="pt-2">
              <p className="font-heading font-semibold text-foreground">David Zolt</p>
              <p className="text-sm text-muted-foreground">AI Automation Architect, ZoltFlow</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 rounded-xl border border-border/60 bg-card/40 p-8 sm:grid-cols-3">
          <div>
            <h3 className="font-heading font-semibold text-foreground">Why AI automation</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Modern AI can handle real conversations, not just menu trees. It can understand intent, handle objections, and book appointments the way a trained receptionist would.
            </p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground">Why dental practices</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Dental offices get dozens of calls daily, plus emergencies after hours. One missed call often means losing a patient to a competitor who answered.
            </p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground">Why now</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The technology has matured, but most solutions are still built for large enterprises. We&apos;re making it accessible for independent practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
