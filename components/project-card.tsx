"use client"

import { useState } from "react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  status: "active" | "archived" | "experimental"
  link?: string
  videoUrl?: string // Added videoUrl prop for Bilibili embeds
}

export function ProjectCard({ title, description, tags, status, link, videoUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const statusColors = {
    active: "text-primary border-primary/50",
    archived: "text-muted-foreground border-muted/50",
    experimental: "text-accent border-accent/50",
  }

  const statusLabels = {
    active: "ACTIVE",
    archived: "ARCHIVED",
    experimental: "EXPERIMENTAL",
  }

  const content = (
    <div
      className={`group relative border ${statusColors[status]} bg-card/50 backdrop-blur-sm rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] h-full flex flex-col overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {videoUrl && (
        <div className="relative w-full aspect-video bg-background/50">
          <iframe
            src={videoUrl}
            scrolling="no"
            border="0"
            frameBorder="no"
            framespacing="0"
            allowFullScreen={true}
            className="absolute inset-0 w-full h-full"
          />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Status indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          <div
            className={`w-2 h-2 rounded-full ${status === "active" ? "bg-primary animate-pulse" : status === "experimental" ? "bg-accent animate-pulse" : "bg-muted"}`}
          />
          <span className={`font-mono text-xs ${statusColors[status].split(" ")[0]}`}>{statusLabels[status]}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl mb-3 pr-24">{title}</h3>

        {/* Description */}
        <p className="font-mono text-sm text-muted-foreground mb-4 flex-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="font-mono text-xs px-2 py-1 border border-primary/30 rounded text-primary">
              {tag}
            </span>
          ))}
        </div>

        {/* Hover indicator */}
        {link && (
          <div
            className={`font-mono text-sm text-primary transition-opacity ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            {">> EXPLORE"}
          </div>
        )}
      </div>

      {/* Scan line effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent transition-transform duration-1000 ${isHovered ? "translate-y-full" : "-translate-y-full"}`}
        style={{ pointerEvents: "none" }}
      />
    </div>
  )

  if (link) {
    return <Link href={link}>{content}</Link>
  }

  return content
}
