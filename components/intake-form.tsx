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
import { CheckCircle2, ArrowRight } from "lucide-react"

type Fields = {
  name: string
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
    practice: "",
    software: "",
    missedCalls: "",
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof Fields>(key: K, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function validate(): boolean {
    const next: Errors = {}
    if (!fields.name.trim()) next.name = "Please enter your full name."
    if (!fields.practice.trim()) next.practice = "Tell us your practice name and locations."
    if (!fields.software) next.software = "Select your patient management software."
    if (!fields.missedCalls.trim()) next.missedCalls = "An estimate helps us prepare."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-7 w-7 text-primary" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground">Application received</h3>
        <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
          {`Thanks, ${fields.name.split(" ")[0] || "there"}. Our team is reviewing your practice details and will reach out from `}
          <span className="text-foreground">zolt.ai.staff@gmail.com</span>
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
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="practice">Practice name &amp; locations</Label>
          <Input
            id="practice"
            value={fields.practice}
            onChange={(e) => update("practice", e.target.value)}
            placeholder="Rivera Family Dental — 3 locations, Austin TX"
            aria-invalid={!!errors.practice}
          />
          {errors.practice && <p className="text-sm text-destructive">{errors.practice}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="software">Patient management software</Label>
          <Select value={fields.software} onValueChange={(v) => update("software", v ?? "")}>
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
          />
          {errors.missedCalls && <p className="text-sm text-destructive">{errors.missedCalls}</p>}
        </div>

        <Button type="submit" size="lg" className="mt-2 w-full gap-2">
          Submit application &amp; connect
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          {"We'll reach out from "}
          <span className="text-foreground">zolt.ai.staff@gmail.com</span>
          {" within one business day."}
        </p>
      </div>
    </form>
  )
}
