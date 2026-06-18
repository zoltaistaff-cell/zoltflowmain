"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const coreRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const core = useRef({ x: 0, y: 0 })
  const frame = useRef<number>(0)
  const visible = useRef(false)

  useEffect(() => {
    // Respect users who prefer reduced motion.
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const setVisible = (on: boolean) => {
      visible.current = on
      const o = on ? "1" : "0"
      if (glowRef.current) glowRef.current.style.opacity = o
      if (coreRef.current) coreRef.current.style.opacity = o
    }

    const handleMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY }
      if (!visible.current) setVisible(true)
    }

    const handleLeave = () => setVisible(false)

    const tick = () => {
      // Outer glow trails softly; the inner core tracks tighter for a lively feel.
      current.current.x += (target.current.x - current.current.x) * 0.12
      current.current.y += (target.current.y - current.current.y) * 0.12
      core.current.x += (target.current.x - core.current.x) * 0.28
      core.current.y += (target.current.y - core.current.y) * 0.28
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`
      }
      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${core.current.x}px, ${core.current.y}px, 0) translate(-50%, -50%)`
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
    <>
      {/* Large ambient halo — trails the pointer */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-0 h-[34rem] w-[34rem] rounded-full opacity-0 blur-2xl transition-opacity duration-500 will-change-transform"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--primary) 55%, transparent) 0%, color-mix(in oklch, var(--primary) 22%, transparent) 35%, transparent 70%)",
        }}
      />
      {/* Bright pulsing core — tracks tightly */}
      <div
        ref={coreRef}
        aria-hidden="true"
        className="cursor-core pointer-events-none fixed left-0 top-0 z-0 h-40 w-40 rounded-full opacity-0 blur-md transition-opacity duration-300 will-change-transform"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--primary) 90%, white 10%) 0%, color-mix(in oklch, var(--primary) 50%, transparent) 45%, transparent 72%)",
        }}
      />
    </>
  )
}
