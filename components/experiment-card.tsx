"use client"

import { useState } from "react"

interface ExperimentCardProps {
  title: string
  description: string
  category: string
  interactive?: boolean
  onClick?: () => void
}

export function ExperimentCard({ title, description, category, interactive = false, onClick }: ExperimentCardProps) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className={`group relative border border-accent/30 bg-card/50 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(255,0,255,0.3)] ${
        interactive ? "cursor-pointer" : ""
      }`}
      onClick={() => {
        if (interactive && onClick) {
          setIsActive(!isActive)
          onClick()
        }
      }}
    >
      {/* Category badge */}
      <div className="absolute top-4 right-4">
        <span className="font-mono text-xs px-2 py-1 border border-accent/50 rounded text-accent bg-accent/10">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-heading text-2xl mb-3 pr-24 text-accent">{title}</h3>

      {/* Description */}
      <p className="font-mono text-sm text-muted-foreground mb-4">{description}</p>

      {/* Interactive indicator */}
      {interactive && (
        <div className="flex items-center gap-2 font-mono text-xs text-accent">
          <div className={`w-2 h-2 rounded-full ${isActive ? "bg-accent animate-pulse" : "bg-accent/50"}`} />
          <span>{isActive ? "RUNNING" : "CLICK TO ACTIVATE"}</span>
        </div>
      )}

      {/* Glitch effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 255, 0.03) 2px, rgba(255, 0, 255, 0.03) 4px)",
        }}
      />
    </div>
  )
}
