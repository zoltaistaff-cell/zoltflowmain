import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "How is this different from hiring an agency?",
    a: "Agencies sell you ongoing labor and keep the keys. We build owned systems, document them, and hand them over. The goal is to make ourselves unnecessary—not to bill you forever.",
  },
  {
    q: "We already have tools. Will you replace our stack?",
    a: "No. We work inside the tools you already pay for and connect them properly. If something genuinely isn't fit for purpose, we'll tell you—but rip-and-replace is the exception, not the default.",
  },
  {
    q: "What actually happens on the systems audit?",
    a: "We tear down your current funnel and operations live, identify the highest-leverage system to build first, and show you exactly where revenue is leaking. You leave with a clear plan whether or not we work together.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-b border-border/60">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Questions</p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Everything you&apos;d ask before applying.
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
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
