import Link from "next/link"
import { ParticleBackground } from "@/components/particle-background"
import { GridBackground } from "@/components/grid-background"
import { BlogCard } from "@/components/blog-card"

const blogPosts = [
  {
    title: "扣子工作流搭建指南",
    excerpt:
      "深入讲解如何使用Coze平台搭建智能工作流，从基础概念到实战应用，帮助你快速上手AI工作流自动化，提升工作效率。",
    date: "2025-01-20",
    readTime: "15分钟阅读",
    tags: ["Coze", "工作流", "AI", "自动化"],
    url: "https://xot6j19wmi.feishu.cn/wiki/YlO5w8dZ3i47X6kHBfScGEz0n0C?from=from_copylink",
  },
  {
    title: "n8n草履虫级入门教程",
    excerpt:
      "从零开始学习n8n自动化工具，即使是完全的新手也能轻松掌握。通过实际案例演示如何构建自动化工作流，让重复性工作变得简单高效。",
    date: "2025-01-18",
    readTime: "12分钟阅读",
    tags: ["n8n", "自动化", "教程", "工作流"],
    url: "https://xot6j19wmi.feishu.cn/wiki/MPPXw3Q9Ji6sPZkuH0dc4CninDc?from=from_copylink",
  },
  {
    title: "AI换装技术实战",
    excerpt: "探索AI图像处理的神奇应用，学习如何使用AI技术实现智能换装效果。从原理讲解到实际操作，带你玩转AI视觉创意。",
    date: "2025-01-15",
    readTime: "10分钟阅读",
    tags: ["AI", "图像处理", "ComfyUI", "创意"],
    url: "https://xot6j19wmi.feishu.cn/wiki/Tcizwi2PKiAjfNkdo7XcowWrnWh?from=from_copylink",
  },
  {
    title: "MCP协议搭建完整教程",
    excerpt:
      "详细介绍Model Context Protocol (MCP)的搭建流程，帮助开发者理解并实现AI模型的上下文管理。包含环境配置、核心概念和实战案例。",
    date: "2025-01-12",
    readTime: "18分钟阅读",
    tags: ["MCP", "AI", "协议", "开发"],
    url: "https://xot6j19wmi.feishu.cn/wiki/IkoAwn2lxiqrCfkCpQ7c0k3ln1e?from=from_copylink",
  },
  {
    title: "Vibe Coding快速开发App",
    excerpt:
      "体验新一代AI辅助编程工具Vibe Coding，通过自然语言描述快速构建应用程序。探索AI如何改变传统开发流程，让编程变得更加直观高效。",
    date: "2025-01-08",
    readTime: "14分钟阅读",
    tags: ["Vibe", "AI编程", "低代码", "开发"],
    url: "https://xot6j19wmi.feishu.cn/wiki/CCgOwPQSviVNqUkgF26cUiVZnye?from=from_copylink",
  },
  {
    title: "DeepSeek提示词库精选",
    excerpt:
      "精心整理的DeepSeek提示词库，涵盖各类应用场景。从文案创作到代码生成，从数据分析到创意设计，帮你充分发挥AI的潜力。",
    date: "2025-01-05",
    readTime: "8分钟阅读",
    tags: ["DeepSeek", "提示词", "AI", "效率"],
    url: "https://xot6j19wmi.feishu.cn/wiki/VCT4wtC7HitlgfkgSFAcR0Ebnbc?from=from_copylink",
  },
]

export default function BlogPage() {
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
            <div className="font-heading text-xl text-primary">思想流</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-muted-foreground">在线</span>
            </div>
          </div>
        </header>

        <div className="flex-1 container mx-auto px-4 py-12">
          <div className="mb-12 text-center space-y-4">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary">thought</h1>
            <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
              来自数字虚空的传输 • 关于AI工具和自动化的实战教程
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <BlogCard key={post.url} {...post} />
            ))}
          </div>
        </div>

        <footer className="border-t border-primary/20 bg-card/30 backdrop-blur-md py-4">
          <div className="container mx-auto px-4 text-center font-mono text-xs text-muted-foreground">
            <p> Orion © {new Date().getFullYear()} • 版权所有</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
