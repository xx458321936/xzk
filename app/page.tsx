import Link from "next/link"
import { ParticleBackground } from "@/components/particle-background"
import { GridBackground } from "@/components/grid-background"
import { StatusPanel } from "@/components/status-panel"
import { GlitchText } from "@/components/glitch-text"
import { TerminalOutput } from "@/components/terminal-output"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <GridBackground />
      <ParticleBackground />

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="border-b border-primary/20 bg-card/30 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="font-heading text-xl text-primary">Hello ^^</div>
            <div className="flex items-center gap-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-muted-foreground">在线</span>
              </div>
              <div className="text-muted-foreground">{new Date().toLocaleTimeString("zh-CN", { hour12: false })}</div>
            </div>
          </div>
        </header>

        <div className="flex-1 container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-64 space-y-4">
            <StatusPanel label="生命进度" value={20} unit="%" color="primary" />
            <StatusPanel label="情感波动指数" value="10" unit="%" color="accent" />
            <StatusPanel label="逻辑温度" value={68} color="secondary" />
            <StatusPanel label="梦境干扰" value="1" color="primary" />
          </aside>

          <div className="flex-1 flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary">
                <GlitchText text="Orion Aether" />
              </h1>
              <p className="font-mono text-lg md:text-xl text-muted-foreground max-w-2xl">
                大风起于青萍之末，巨浪成于微澜之间
              </p>
            </div>

            <nav className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
              <Link
                href="/projects"
                className="group relative border border-primary/30 bg-card/50 backdrop-blur-sm p-6 rounded-lg hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              >
                <div className="font-heading text-2xl text-primary mb-2">创作</div>
                <div className="font-mono text-sm text-muted-foreground">探索我的数字创作</div>
                <div className="absolute top-2 right-2 font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {">>"}
                </div>
              </Link>

              <Link
                href="/blog"
                className="group relative border border-accent/30 bg-card/50 backdrop-blur-sm p-6 rounded-lg hover:border-accent transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]"
              >
                <div className="font-heading text-2xl text-accent mb-2">项目</div>
                <div className="font-mono text-sm text-muted-foreground">来自虚空的思考</div>
                <div className="absolute top-2 right-2 font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  {">>"}
                </div>
              </Link>

              <Link
                href="/about"
                className="group relative border border-primary/30 bg-card/50 backdrop-blur-sm p-6 rounded-lg hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              >
                <div className="font-heading text-2xl text-primary mb-2">我</div>
                <div className="font-mono text-sm text-muted-foreground">了解这个实体</div>
                <div className="absolute top-2 right-2 font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {">>"}
                </div>
              </Link>
            </nav>
          </div>

          <aside className="lg:w-80 border border-primary/20 bg-card/30 backdrop-blur-sm p-4 rounded-lg h-fit">
            <div className="font-mono text-xs text-primary mb-4 flex items-center gap-2">
              <span>系统日志</span>
              <div className="flex-1 h-px bg-primary/20" />
            </div>
            <TerminalOutput />
          </aside>
        </div>

        <footer className="border-t border-primary/20 bg-card/30 backdrop-blur-md py-4">
          <div className="container mx-auto px-4 text-center font-mono text-xs text-muted-foreground">
            <p>Orion © {new Date().getFullYear()} • 版权所有</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
