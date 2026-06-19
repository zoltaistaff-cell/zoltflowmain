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
import { ArrowRight, CheckCircle2, Clock, Phone, MessageSquare, Loader2, AlertCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"

const SOFTWARE_OPTIONS = [
  "Dentrix",
  "Eaglesoft",
  "Open Dental",
  "Curve Dental",
  "Denticon",
  "athenahealth",
  "Epic",
  "Other / Not sure",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState("")
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError("")

    const form = e.currentTarget
    const data = new FormData(form)
    const next: Record<string, string> = {}

    const name = String(data.get("name") || "").trim()
    if (!name) next.name = "Please enter your name."

    const email = String(data.get("email") || "").trim()
    if (!email) next.email = "Please enter your email."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address."

    const practice_name = String(data.get("practice") || "").trim()
    if (!practice_name) next.practice = "Please enter your practice name."

    setErrors(next)
    if (Object.keys(next).length > 0) return

    const practice_management_software = String(data.get("software") || "").trim() || null
    const additional_notes = String(data.get("context") || "").trim() || null

    setIsSubmitting(true)

    try {
      const { error } = await supabase.from("leads").insert([
        {
          name,
          email,
          practice_name,
          practice_management_software,
          additional_notes,
        },
      ])

      if (error) {
        console.error("Supabase insert error:", error)
        setSubmitError("Something went wrong submitting your request. Please try again or email us directly.")
        setIsSubmitting(false)
        return
      }

      setSubmittedName(name.split(" ")[0] || "there")
      setSubmittedEmail(email)
      setSubmitted(true)
    } catch (err) {
      console.error("Network error:", err)
      setSubmitError("Connection issue. Please check your internet and try again.")
    } finally {
      setIsSubmitting(false)
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
              <div className="relative mb-6">
                <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                <div className="relative flex size-16 items-center justify-center rounded-full bg-primary/12 ring-2 ring-primary/20">
                  <CheckCircle2 className="size-8 text-primary" />
                </div>
              </div>
              <h3 className="font-heading text-2xl font-semibold tracking-tight">
                You&apos;re on the list, {submittedName}.
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                David Zolt&apos;s team is now reviewing your practice details and building your personalized optimization blueprint. Expect a response at{" "}
                <span className="font-medium text-foreground">{submittedEmail}</span>{" "}
                within one business day.
              </p>
              <div className="mt-8 rounded-xl border border-border/40 bg-background/50 px-5 py-3">
                <p className="text-xs text-muted-foreground">
                  Questions in the meantime?{" "}
                  <a
                    href="mailto:zolt.ai.staff@gmail.com"
                    className="text-primary transition-colors hover:text-primary/80"
                  >
                    zolt.ai.staff@gmail.com
                  </a>
                </p>
              </div>
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
                  <SelectTrigger id="software">
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

              {submitError && (
                <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3">
                  <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
                  <p className="text-xs leading-relaxed text-destructive">{submitError}</p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="group mt-1 w-full rounded-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Request a call
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
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
