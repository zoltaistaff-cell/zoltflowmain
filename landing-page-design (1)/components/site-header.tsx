"use client"

import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Systems", href: "#offers" },
  { label: "Results", href: "#results" },
  { label: "Engagement", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAudit = () => {
    document.querySelector("#audit")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          onClick={(e) => handleNav(e, "#top")}
          className="flex items-center gap-2"
          aria-label="Northbound home"
        >
          {/* Logo placeholder , swap with your own mark */}
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1L15 14H1L8 1Z" fill="currentColor" />
            </svg>
          </span>
          <span className="font-heading text-base font-semibold tracking-tight">Northbound</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button onClick={scrollToAudit} className="rounded-full font-medium">
          Book Systems Audit
        </Button>
      </div>
    </header>
  )
}
