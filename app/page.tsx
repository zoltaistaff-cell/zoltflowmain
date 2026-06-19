import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { OffersBento } from "@/components/offers-bento"
import { HowItWorks } from "@/components/how-it-works"
import { FounderSection } from "@/components/founder-section"
import { CaseStudies } from "@/components/case-studies"
import { Pricing } from "@/components/pricing"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { ContactForm } from "@/components/contact-form"
import { SiteFooter } from "@/components/site-footer"
import { CursorGlow } from "@/components/cursor-glow"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <CursorGlow />
      <SiteHeader />
      <main>
        <Hero />
        <OffersBento />
        <HowItWorks />
        <FounderSection />
        <CaseStudies />
        <Pricing />
        <Faq />
        <FinalCta />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  )
}
