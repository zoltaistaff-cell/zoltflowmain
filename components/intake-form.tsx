"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"

type Fields = {
  name: string
  email: string
  practice: string
  software: string
  missedCalls: string
}

type Errors = Partial<Record<keyof Fields, string>>

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

export function IntakeForm() {
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    practice: "",
    software: "",
    missedCalls: "",
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  function update<K extends keyof Fields>(key: K, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function validate(): boolean {
    const next: Errors = {}
    if (!fields.name.trim()) {
      next.name = "Please enter your full name."
    }
    
    if (!fields.email.trim()) {
      next.email = "Please enter your email."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      next.email = "Enter a valid email address."
    }

    if (!fields.practice.trim()) {
      next.practice = "Tell us your practice name and locations."
    }
    
    if (!fields.software) {
      next.software = "Select your patient management software."
    }
    
    if (!fields.missedCalls.trim()) {
      next.missedCalls = "An estimate helps us prepare."
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitError("")
    
    if (!validate()) return

    setIsSubmitting(true)

    try {
      const { error } = await supabase.from("leads").insert([
        {
          name: fields.name,
          email: fields.email,
          practice_name: fields.practice,
          practice_management_software: fields.software || null,
          additional_notes: `Estimated missed calls per week: ${fields.missedCalls}`,
        },
      ])

      if (error) {
        console.error("Supabase submission error:", error)
        setSubmitError(`Error: ${error.message}. Please try again or email us at hello@zoltflow.com`)
        setIsSubmitting(false)
        return
      }

      setSubmittedEmail(fields.email)
      setSubmitted(true)
    } catch (err) {
      console.error("Network error during submission:", err)
      setSubmitError("Connection issue. Please check your internet and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card p-10 text-center">
        <div className="relative mb-2">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20">
            <CheckCircle2 className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground">Application received</h3>
        <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground text-sm">
          {`Thanks, ${fields.name.split(" ")[0] || "there"}. David Zolt's team is reviewing your practice details to build your personalized optimization blueprint. We'll reach out to `}
          <span className="font-medium text-foreground">{submittedEmail}</span>
          {` within one business day to schedule your call.`}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Dr. Jordan Rivera"
            aria-invalid={!!errors.name}
            disabled={isSubmitting}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jordan@example.com"
            type="email"
            aria-invalid={!!errors.email}
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="practice">Practice name &amp; locations</Label>
          <Input
            id="practice"
            value={fields.practice}
            onChange={(e) => update("practice", e.target.value)}
            placeholder="Rivera Family Dental, 3 locations, Austin TX"
            aria-invalid={!!errors.practice}
            disabled={isSubmitting}
          />
          {errors.practice && <p className="text-sm text-destructive">{errors.practice}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="software">Patient management software</Label>
          <Select
            value={fields.software}
            onValueChange={(v) => update("software", v ?? "")}
            disabled={isSubmitting}
          >
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
          {errors.software && <p className="text-sm text-destructive">{errors.software}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="missedCalls">Estimated missed calls per week</Label>
          <Input
            id="missedCalls"
            value={fields.missedCalls}
            onChange={(e) => update("missedCalls", e.target.value)}
            placeholder="e.g. 25–40"
            inputMode="numeric"
            aria-invalid={!!errors.missedCalls}
            disabled={isSubmitting}
          />
          {errors.missedCalls && <p className="text-sm text-destructive">{errors.missedCalls}</p>}
        </div>

        {submitError && (
          <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3">
            <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
            <p className="text-xs leading-relaxed text-destructive">{submitError}</p>
          </div>
        )}

        <Button type="submit" size="lg" className="mt-2 w-full gap-2" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Submitting application...
            </>
          ) : (
            <>
              Submit application &amp; connect
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </Button>
        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          {"We'll reach out from "}
          <span className="text-foreground">hello@zoltflow.com</span>
          {" within one business day."}
        </p>
      </div>
    </form>
  )
}
