"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, CheckCircle2, Clock, Phone, MessageSquare } from "lucide-react"

const SOFTWARE_OPTIONS = [
  "Dentrix",
  "Eaglesoft",
  "Open Dental",
  "Curve Dental",
  "Denticon",
  "Other / Not sure",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState("")
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const next: Record<string, string> = {}

    const name = String(data.get("name") || "").trim()
    if (!name) next.name = "Please enter your name."

    const email = String(data.get("email") || "").trim()
    if (!email) next.email = "Please enter your email."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address."

    if (!String(data.get("practice") || "").trim()) next.practice = "Please enter your practice name."
    if (!String(data.get("software") || "").trim()) next.software = "Please select your software."

    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmittedName(name.split(" ")[0] || "there")
      setSubmittedEmail(email)
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Book a call</p>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            See how this would work for your practice.
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Quick discovery call. We&apos;ll review how your phones are handled today, show you exactly what the AI would take off your plate, and answer any questions.
          </p>
          <ul className="mt-8 grid gap-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Clock className="size-4 text-primary" /> 15 minutes, no commitment
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-primary" /> See how calls would be handled
            </li>
            <li className="flex items-center gap-3">
              <MessageSquare className="size-4 text-primary" /> Get your questions answered
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-primary/12 text-primary">
                <CheckCircle2 className="size-7" />
              </div>
              <h3 className="font-heading text-xl font-semibold tracking-tight">Thanks, {submittedName}.</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                We&apos;ll email you at <span className="text-foreground">{submittedEmail}</span> within one business day to schedule your call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Your name</Label>
                <Input id="name" name="name" placeholder="Dr. Jordan Rivera" aria-invalid={!!errors.name} />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jordan@example.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="practice">Practice name</Label>
                <Input id="practice" name="practice" placeholder="Riverside Family Dental" aria-invalid={!!errors.practice} />
                {errors.practice && <p className="text-xs text-destructive">{errors.practice}</p>}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="software">Practice management software</Label>
                <Select name="software">
                  <SelectTrigger id="software" aria-invalid={!!errors.software}>
                    <SelectValue placeholder="Select your platform" />
                  </SelectTrigger>
                  <SelectContent>
                    {SOFTWARE_OPTIONS.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.software && <p className="text-xs text-destructive">{errors.software}</p>}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="context">Anything else you want us to know? (optional)</Label>
                <Textarea
                  id="context"
                  name="context"
                  rows={3}
                  placeholder="e.g. We get about 20 calls a day after hours, currently missing a lot of them."
                />
              </div>

              <Button type="submit" size="lg" className="group mt-1 w-full rounded-full">
                Request a call
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
