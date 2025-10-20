"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let dotX = 0
    let dotY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Check if hovering over interactive element
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.style.cursor === "pointer"

      setIsPointer(!!isInteractive)
    }

    const animate = () => {
      // Smooth follow for main cursor
      const dx = mouseX - cursorX
      const dy = mouseY - cursorY
      cursorX += dx * 0.1
      cursorY += dy * 0.1

      // Faster follow for dot
      const dotDx = mouseX - dotX
      const dotDy = mouseY - dotY
      dotX += dotDx * 0.3
      dotY += dotDy * 0.3

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`
      cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-300 ${
          isPointer ? "scale-125" : "scale-100"
        }`}
        style={{ willChange: "transform" }}
      >
        {/* Outer glow ring */}
        <div
          className={`absolute w-16 h-16 rounded-full -translate-x-1/2 -translate-y-1/2 ${
            isPointer ? "bg-accent/10" : "bg-primary/10"
          } blur-md animate-pulse`}
        />

        {/* Main outer ring */}
        <div
          className={`absolute w-12 h-12 border-2 rounded-full -translate-x-1/2 -translate-y-1/2 ${
            isPointer ? "border-accent" : "border-primary"
          } shadow-[0_0_10px_rgba(0,240,255,0.5)]`}
        />

        {/* Middle ring with rotation */}
        <div
          className={`absolute w-9 h-9 border rounded-full -translate-x-1/2 -translate-y-1/2 ${
            isPointer ? "border-accent/60" : "border-primary/60"
          } animate-spin-slow`}
          style={{
            borderStyle: "dashed",
            animationDuration: "3s",
          }}
        />

        {/* Inner ring */}
        <div
          className={`absolute w-6 h-6 border rounded-full -translate-x-1/2 -translate-y-1/2 ${
            isPointer ? "border-accent/40" : "border-primary/40"
          }`}
        />

        {/* Crosshair lines */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2">
          <div
            className={`absolute w-3 h-[1px] left-1/2 top-1/2 -translate-x-1/2 ${
              isPointer ? "bg-accent" : "bg-primary"
            }`}
          />
          <div
            className={`absolute w-[1px] h-3 left-1/2 top-1/2 -translate-y-1/2 ${
              isPointer ? "bg-accent" : "bg-primary"
            }`}
          />
        </div>
      </div>

      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      >
        <div
          className={`w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 ${
            isPointer ? "bg-accent" : "bg-primary"
          } shadow-[0_0_8px_rgba(0,240,255,0.8)]`}
        />
      </div>
    </>
  )
}
