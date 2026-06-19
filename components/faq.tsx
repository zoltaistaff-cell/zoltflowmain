import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Will this replace my front desk staff?",
    a: "No. This handles the repetitive calls so your team can focus on patients in the office. It's like having extra capacity without hiring. Your staff still handles complex questions, patient check-ins, and everything that benefits from a human touch.",
  },
  {
    q: "What practice management software do you integrate with?",
    a: "Dentrix, Eaglesoft, Open Dental, Curve Dental, Denticon, and most major platforms. If you're on something else, we'll assess compatibility on our call.",
  },
  {
    q: "Is this HIPAA compliant?",
    a: "We design with HIPAA-conscious practices: data minimization, encrypted transmission, no unnecessary storage of patient health information. We'll walk through our approach on the call so you can evaluate it for your compliance requirements.",
  },
  {
    q: "What happens when the AI can't handle something?",
    a: "Urgent matters and complex situations get forwarded to your team immediately with full context. The caller gets transferred, and your staff receives a summary of the conversation so far. You always stay in control of edge cases.",
  },
  {
    q: "How quickly can this be set up?",
    a: "Typically 5-10 business days from our kickoff. We configure the system, connect your practice software, and train your team. Training takes one session, usually under an hour.",
  },
  {
    q: "What does the discovery call involve?",
    a: "About 15 minutes. We ask about your current call volume, how you handle after-hours calls now, and what software you use. We'll show you exactly what this would handle for your practice and answer any questions. No commitment, no pressure.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-b border-border/60">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Questions</p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            What dental practice owners usually ask.
          </h2>
        </div>

        <Accordion collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left font-heading text-base font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
