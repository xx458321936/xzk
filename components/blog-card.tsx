"use client"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  url: string // Changed from slug to url for external links
}

export function BlogCard({ title, excerpt, date, readTime, tags, url }: BlogCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <article className="group border border-primary/20 bg-card/50 backdrop-blur-sm p-6 rounded-lg hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]">
        {/* Meta info */}
        <div className="flex items-center gap-4 mb-3 font-mono text-xs text-muted-foreground">
          <time>{date}</time>
          <span>•</span>
          <span>{readTime}</span>
        </div>

        {/* Title */}
        <h2 className="font-heading text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="font-mono text-sm text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="font-mono text-xs px-2 py-1 border border-accent/30 rounded text-accent">
              #{tag}
            </span>
          ))}
        </div>

        {/* Read more indicator */}
        <div className="mt-4 font-mono text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          {">> READ MORE"}
        </div>
      </article>
    </a>
  )
}
