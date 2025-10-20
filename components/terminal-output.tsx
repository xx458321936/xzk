"use client"

import { useEffect, useState } from "react"

const bootSequence = [
  "初始化神经核心...",
  "加载意识矩阵...",
  "同步量子处理器...",
  "建立网络连接...",
  "校准感官输入...",
  "连接成功...",
]

export function TerminalOutput() {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, bootSequence[currentLine]])
        setCurrentLine((prev) => prev + 1)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [currentLine])

  return (
    <div className="font-mono text-sm space-y-1">
      {lines.map((line, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-primary">{">"}</span>
          <span className={i === lines.length - 1 ? "text-accent" : "text-muted-foreground"}>{line}</span>
          {i === lines.length - 1 && currentLine < bootSequence.length && (
            <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
          )}
        </div>
      ))}
    </div>
  )
}
