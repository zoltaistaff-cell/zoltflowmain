"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const gridRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -9999, y: -9999 })
  const frame = useRef<number>(0)
  const active = useRef(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const handleMove = (e: PointerEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!active.current) {
        active.current = true
        if (gridRef.current) gridRef.current.style.opacity = "1"
      }
    }

    const handleLeave = () => {
      active.current = false
      if (gridRef.current) gridRef.current.style.opacity = "0"
    }

    const tick = () => {
      if (gridRef.current) {
        gridRef.current.style.maskImage = `radial-gradient(circle 200px at ${pos.current.x}px ${pos.current.y}px, black, transparent)`
        gridRef.current.style.webkitMaskImage = `radial-gradient(circle 200px at ${pos.current.x}px ${pos.current.y}px, black, transparent)`
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
      ref={gridRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-500"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(128,128,128,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.15) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  )
}
