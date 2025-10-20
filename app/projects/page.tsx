import Link from "next/link"
import { ParticleBackground } from "@/components/particle-background"
import { GridBackground } from "@/components/grid-background"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "知识本地化神器",
    description: "帮助你将全球知识转化为本地化内容的智能工具，提升知识获取和应用效率。",
    tags: ["AI", "知识管理", "本地化"],
    status: "active" as const,
    videoUrl:
      "//player.bilibili.com/player.html?isOutside=true&aid=114795818783620&bvid=BV1kh3EzPEr3&cid=30854679648&p=1",
  },
  {
    title: "是什么让文科生失了业？",
    description: "探讨AI时代对传统文科职业的冲击，以及如何应对职业转型的挑战。",
    tags: ["AI", "职业发展", "教育"],
    status: "active" as const,
    videoUrl:
      "//player.bilibili.com/player.html?isOutside=true&aid=114701094622626&bvid=BV1fmN6zgEge&cid=30554654808&p=1",
  },
  {
    title: "让AI免费帮你做视频",
    description: "利用免费AI工具自动化视频制作流程，从脚本到成片一站式解决方案。",
    tags: ["AI", "视频制作", "自动化"],
    status: "active" as const,
    videoUrl:
      "//player.bilibili.com/player.html?isOutside=true&aid=114688796924942&bvid=BV1U5MazrEz8&cid=30514348741&p=1",
  },
]

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <GridBackground />
      <ParticleBackground />

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="border-b border-primary/20 bg-card/30 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-heading text-xl text-primary hover:text-accent transition-colors">
              {"<"} 返回
            </Link>
            <div className="font-heading text-xl text-primary">创作</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-muted-foreground">在线</span>
            </div>
          </div>
        </header>

        <div className="flex-1 container mx-auto px-4 py-12">
          <div className="mb-12 text-center space-y-4">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary">Creation</h1>
            <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
              VIDEO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="border border-primary/20 bg-card/30 backdrop-blur-sm p-4 rounded-lg text-center">
              <div className="font-heading text-3xl text-primary">{projects.length}</div>
              <div className="font-mono text-xs text-muted-foreground">总创作数</div>
            </div>
            <div className="border border-primary/20 bg-card/30 backdrop-blur-sm p-4 rounded-lg text-center">
              <div className="font-heading text-3xl text-primary">
                {projects.filter((p) => p.status === "active").length}
              </div>
              <div className="font-mono text-xs text-muted-foreground">活跃</div>
            </div>
            <div className="border border-accent/20 bg-card/30 backdrop-blur-sm p-4 rounded-lg text-center">
              <div className="font-heading text-3xl text-accent">
                {projects.filter((p) => p.status === "experimental").length}
              </div>
              <div className="font-mono text-xs text-muted-foreground">实验性</div>
            </div>
          </div>
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
