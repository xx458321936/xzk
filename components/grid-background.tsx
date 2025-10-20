"use client"

export function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      {/* Perspective grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center bottom",
        }}
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(10, 10, 20, 0.8) 100%)",
        }}
      />

      {/* Scanline effect */}
      <div
        className="absolute inset-0 opacity-5 animate-scan"
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent 50%, rgba(0, 255, 255, 0.5) 50%)",
          backgroundSize: "100% 4px",
        }}
      />
    </div>
  )
}
