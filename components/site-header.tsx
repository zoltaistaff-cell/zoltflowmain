"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <a
            href="#top"
            onClick={(e) => handleNav(e, "#top")}
            className="flex items-center gap-2"
            aria-label="ZoltFlow home"
          >
            <Image
              src="/logo.png"
              alt="ZoltFlow logo"
              width={28}
              height={28}
              className="rounded-md object-contain"
            />
            <span className="font-heading text-base font-semibold tracking-tight">ZoltFlow</span>
          </a>

          {/* Quick Settings Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex size-7 items-center justify-center rounded-md border border-border/50 bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Toggle quick menu"
            >
              <Menu className="size-4" />
            </button>

            {open && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
                <div className="absolute left-0 mt-2 z-50 w-48 rounded-xl border border-border bg-card p-1.5 shadow-lg backdrop-blur-xl animate-in fade-in slide-in-from-top-1 duration-200">
                  <Link
                    href="/apply"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center rounded-lg px-3 py-1.5 text-sm hover:bg-muted transition-colors text-foreground"
                  >
                    Apply Now
                  </Link>
                  <button
                    onClick={() => {
                      setOpen(false)
                      scrollToContact()
                    }}
                    className="flex w-full items-center rounded-lg px-3 py-1.5 text-sm hover:bg-muted transition-colors text-left text-foreground cursor-pointer"
                  >
                    Book a Call
                  </button>
                  <div className="my-1 border-t border-border/60" />
                  <Link
                    href="/privacy"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center rounded-lg px-3 py-1.5 text-sm hover:bg-muted transition-colors text-foreground"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center rounded-lg px-3 py-1.5 text-sm hover:bg-muted transition-colors text-foreground"
                  >
                    Terms of Service
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

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

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button onClick={scrollToContact} className="rounded-full font-medium">
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  )
}
