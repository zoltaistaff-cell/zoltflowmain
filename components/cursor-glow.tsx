"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -9999, y: -9999 })
  const frame = useRef<number>(0)
  const active = useRef(false)

  useEffect(() => {
    // Completely disable on mobile/tablet touch screens to prevent stray glow artifacts
    const isTouch = window.matchMedia("(pointer: coarse)").matches
    if (isTouch) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const handleMove = (e: PointerEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!active.current) {
        active.current = true
        if (glowRef.current) glowRef.current.style.opacity = "0.08" // barely visible, clean glow
      }
    }

    const handleLeave = () => {
      active.current = false
      if (glowRef.current) glowRef.current.style.opacity = "0"
    }

    const tick = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.x - 200}px, ${pos.current.y - 200}px, 0)`
      }
      frame.current = requestAnimationFrame(tick)
    }

    window.addEventListener("pointermove", handleMove)
    document.addEventListener("pointerleave", handleLeave)
    frame.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("pointermove", handleMove)
      document.removeEventListener("pointerleave", handleLeave)
      cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full bg-primary opacity-0 blur-[120px] transition-opacity duration-500"
    />
  )
}
