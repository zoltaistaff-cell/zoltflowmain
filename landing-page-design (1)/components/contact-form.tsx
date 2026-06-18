"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const next: Record<string, string> = {}

    if (!String(data.get("name") || "").trim()) next.name = "Please enter your name."
    const email = String(data.get("email") || "").trim()
    if (!email) next.email = "Please enter your email."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address."
    if (!String(data.get("company") || "").trim()) next.company = "Please enter your company."

    setErrors(next)
    if (Object.keys(next).length === 0) {
      // Visual-only success state. Wire to a backend or booking tool later.
      setSubmitted(true)
    }
  }

  return (
    <section id="audit" className="border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Apply now</p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Book your systems audit.
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Tell us where you are today. If it&apos;s a fit, we&apos;ll send a calendar link for a working teardown of
            your funnel—no obligation, no generic pitch.
          </p>
          <ul className="mt-8 grid gap-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-4 text-primary" /> Live teardown of your current funnel
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-4 text-primary" /> The first system we&apos;d build, and why
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-4 text-primary" /> A plan you keep whether we work together or not
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-primary/12 text-primary">
                <CheckCircle2 className="size-7" />
              </div>
              <h3 className="font-heading text-xl font-semibold tracking-tight">Application received.</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                We review every application personally. If it&apos;s a fit, expect a calendar link within one business
                day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" placeholder="Jordan Rivera" aria-invalid={!!errors.name} />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jordan@company.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" placeholder="Acme Inc." aria-invalid={!!errors.company} />
                {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="context">Where are you stuck?</Label>
                <Textarea
                  id="context"
                  name="context"
                  rows={4}
                  placeholder="A sentence or two on your current revenue motion and what's breaking."
                />
              </div>

              <Button type="submit" size="lg" className="group mt-1 w-full rounded-full">
                Submit application
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                We typically respond within one business day.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
