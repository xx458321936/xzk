"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {/* Transition overlay */}
      <div
        className={`fixed inset-0 z-[9998] pointer-events-none transition-opacity duration-500 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-heading text-4xl text-primary animate-pulse">LOADING...</div>
        </div>
      </div>

      {/* Page content */}
      <div className={`transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>
    </>
  )
}
