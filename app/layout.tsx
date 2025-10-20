import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CustomCursor } from "@/components/custom-cursor"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Digital Organism | Portfolio",
  description: "A living, evolving digital entity",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  )
}
