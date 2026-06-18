import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { CaseStudies } from "@/components/case-studies"
import { OffersBento } from "@/components/offers-bento"
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
        <CaseStudies />
        <OffersBento />
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
