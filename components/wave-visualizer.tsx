"use client"

import { useEffect, useRef } from "react"

export function WaveVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let time = 0

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 20, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const waves = 3
      const amplitude = 40
      const frequency = 0.02

      for (let w = 0; w < waves; w++) {
        ctx.beginPath()
        ctx.strokeStyle =
          w === 0 ? "rgba(0, 255, 255, 0.8)" : w === 1 ? "rgba(255, 0, 255, 0.6)" : "rgba(138, 43, 226, 0.4)"
        ctx.lineWidth = 2

        for (let x = 0; x < canvas.width; x++) {
          const y =
            canvas.height / 2 +
            Math.sin(x * frequency + time + w * 2) * amplitude +
            Math.sin(x * frequency * 2 + time * 1.5 + w) * (amplitude / 2)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      }

      time += 0.05
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className="w-full h-64 rounded-lg border border-primary/20" />
}
