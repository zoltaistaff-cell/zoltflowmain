"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const frame = useRef<number>(0)
  const visible = useRef(false)

  useEffect(() => {
    // Respect users who prefer reduced motion.
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const setVisible = (on: boolean) => {
      visible.current = on
      if (glowRef.current) {
        glowRef.current.style.opacity = on ? "0.35" : "0"
      }
    }

    const handleMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY }
      if (!visible.current) setVisible(true)
    }

    const handleLeave = () => setVisible(false)

    const tick = () => {
      // Smooth interpolation for a subtle trail effect that centers under the cursor
      current.current.x += (target.current.x - current.current.x) * 0.15
      current.current.y += (target.current.y - current.current.y) * 0.15
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`
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
      className="pointer-events-none fixed left-0 top-0 z-0 h-96 w-96 rounded-full opacity-0 blur-3xl transition-opacity duration-700 will-change-transform"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklch, var(--primary) 12%, transparent) 0%, color-mix(in oklch, var(--primary) 3%, transparent) 50%, transparent 80%)",
      }}
    />
  )
}
