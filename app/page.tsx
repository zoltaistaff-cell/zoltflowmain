import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { OffersBento } from "@/components/offers-bento"
import { HowItWorks } from "@/components/how-it-works"
import { FounderSection } from "@/components/founder-section"
import { CaseStudies } from "@/components/case-studies"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { ContactForm } from "@/components/contact-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <OffersBento />
        <HowItWorks />
        <FounderSection />
        <CaseStudies />
        <Features />
        <Pricing />
        <Faq />
        <FinalCta />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  )
}
