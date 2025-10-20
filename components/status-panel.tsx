"use client"

import { useEffect, useState } from "react"

interface StatusPanelProps {
  label: string
  value: string | number
  unit?: string
  color?: "primary" | "accent" | "secondary"
}

export function StatusPanel({ label, value, unit, color = "primary" }: StatusPanelProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (typeof value === "number") {
      let current = 0
      const increment = value / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, 20)
      return () => clearInterval(timer)
    }
  }, [value])

  const colorClasses = {
    primary: "text-primary border-primary/30",
    accent: "text-accent border-accent/30",
    secondary: "text-secondary border-secondary/30",
  }

  return (
    <div className={`border ${colorClasses[color]} bg-card/50 backdrop-blur-sm p-4 rounded-lg`}>
      <div className="font-mono text-xs text-muted-foreground mb-2">{label}</div>
      <div className={`font-heading text-2xl ${colorClasses[color].split(" ")[0]}`}>
        {typeof value === "number" ? displayValue : value}
        {unit && <span className="text-sm ml-1">{unit}</span>}
      </div>
    </div>
  )
}
