import Link from "next/link"
import Image from "next/image"
import { ParticleBackground } from "@/components/particle-background"
import { GridBackground } from "@/components/grid-background"

const skills = [
  { name: "Python", level: 85, category: "编程语言" },
  { name: "HTML/CSS/JavaScript", level: 90, category: "前端开发" },
  { name: "Vue", level: 85, category: "前端框架" },
  { name: "React", level: 80, category: "前端框架" },
  { name: "TypeScript", level: 80, category: "编程语言" },
  { name: "Solidity", level: 70, category: "区块链" },
  { name: "视频剪辑 (PR/AE/剪映)", level: 88, category: "多媒体" },
  { name: "AI应用", level: 85, category: "人工智能" },
]

const timeline = [
  {
    year: "2025",
    period: "2025.01",
    title: "AI视频自动化工作流",
    side: "left",
    description:
      "基于Coze和n8n构建的智能视频生成系统，实现从脚本生成、素材匹配、视频剪辑到发布的全流程自动化。使用Python处理数据，结合AI大模型生成创意内容，通过剪映API实现批量视频制作。",
    tags: ["Python", "AI应用", "视频剪辑", "自动化"],
    tech: ["Coze", "n8n", "Python", "剪映API", "GPT-4"],
  },
  {
    year: "2024",
    period: "2024.11",
    title: "区块链DApp开发",
    side: "right",
    description:
      "开发基于以太坊的去中心化应用，使用Solidity编写智能合约实现NFT铸造和交易功能。前端采用React + TypeScript + Web3.js构建，实现钱包连接、合约交互和实时数据展示。",
    tags: ["Solidity", "React", "TypeScript", "区块链"],
    tech: ["Solidity", "Hardhat", "React", "TypeScript", "Web3.js", "MetaMask"],
  },
  {
    year: "2024",
    period: "2024.08",
    title: "企业级Vue管理系统",
    side: "left",
    description:
      "使用Vue 3 + TypeScript开发的人力资源管理系统，包含员工管理、考勤统计、薪资核算等模块。采用Element Plus组件库，实现响应式布局和权限管理，支持数据导出和可视化报表。",
    tags: ["Vue", "TypeScript", "前端开发"],
    tech: ["Vue 3", "TypeScript", "Element Plus", "Pinia", "Vite"],
  },
  {
    year: "2024",
    period: "2024.06",
    title: "AI换装视频批量制作",
    side: "right",
    description:
      "利用AI换装技术和视频剪辑工具，开发批量处理服装展示视频的工作流。使用Python调用AI模型API进行图像处理，通过PR和AE模板实现视频批量渲染，大幅提升内容生产效率。",
    tags: ["AI应用", "Python", "视频剪辑"],
    tech: ["Python", "Stable Diffusion", "PR", "AE", "FFmpeg"],
  },
  {
    year: "2024",
    period: "2024.03",
    title: "React数据可视化平台",
    side: "left",
    description:
      "基于React + TypeScript构建的数据分析平台，集成ECharts和D3.js实现多维度数据可视化。支持实时数据更新、自定义图表配置和交互式数据探索，提供直观的业务洞察。",
    tags: ["React", "TypeScript", "前端开发"],
    tech: ["React", "TypeScript", "ECharts", "D3.js", "Ant Design"],
  },
  {
    year: "2023",
    period: "2023.12",
    title: "短视频内容创作工具链",
    side: "right",
    description:
      "整合Camtasia、剪映、PR等工具的视频创作流程，开发自动化脚本实现素材管理、字幕生成、特效添加和批量导出。使用Python编写辅助工具，提升视频制作效率300%。",
    tags: ["视频剪辑", "Python", "自动化"],
    tech: ["Camtasia", "剪映", "PR", "Python", "FFmpeg"],
  },
  {
    year: "2023",
    period: "2023.09",
    title: "全栈教务小程序",
    side: "left",
    description:
      "使用原生小程序框架开发的教务管理系统，前端采用HTML/CSS/JavaScript实现课程查询、成绩管理等功能。后端使用Node.js + Express构建RESTful API，实现数据持久化和用户认证。",
    tags: ["HTML/CSS/JavaScript", "前端开发"],
    tech: ["微信小程序", "JavaScript", "Node.js", "Express", "MySQL"],
  },
  {
    year: "2023",
    period: "2023.06",
    title: "AI提示词管理系统",
    side: "right",
    description:
      "开发基于DeepSeek的提示词库管理平台，使用Vue构建前端界面，实现提示词的分类、搜索、收藏和分享功能。集成AI模型测试功能，帮助用户快速验证和优化提示词效果。",
    tags: ["Vue", "AI应用", "前端开发"],
    tech: ["Vue 3", "TypeScript", "DeepSeek API", "Markdown"],
  },
]

export default function AboutPage() {
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
            <div className="font-heading text-xl text-primary">个人档案</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-muted-foreground">在线</span>
            </div>
          </div>
        </header>

        <div className="flex-1 container mx-auto px-4 py-12">
          <div className="mb-12 flex flex-col items-center space-y-6">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              <Image src="/images/design-mode/1714614742254.jpg" alt="谢子康" fill className="object-cover" priority />
            </div>
            <div className="text-center space-y-2">
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary">谢子康</h1>
              <p className="font-mono text-lg text-accent">全栈开发 · AI应用探索 · 视频创作</p>
              <p className="font-mono text-sm text-muted-foreground">千里之行，始于足下</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
                <div className="font-mono text-xs text-primary px-3 py-1.5 border border-primary/30 rounded bg-primary/5">
                  📧 2978084195@qq.com
                </div>
                <div className="font-mono text-xs text-primary px-3 py-1.5 border border-primary/30 rounded bg-primary/5">
                  📱 19227240339
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            <section className="border border-primary/20 bg-card/50 backdrop-blur-sm p-8 rounded-lg">
              <h2 className="font-heading text-3xl text-accent mb-12 text-center">时间线</h2>
              <div className="relative">
                {/* Center line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 transform -translate-x-1/2 hidden md:block" />

                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div
                      key={item.period}
                      className={`relative flex flex-col md:flex-row items-center gap-8 ${
                        item.side === "left" ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Content card */}
                      <div className="w-full md:w-[calc(50%-2rem)] group">
                        <div className="border border-primary/30 bg-card/80 backdrop-blur-sm p-6 rounded-lg hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="font-heading text-2xl text-primary">{item.year}</div>
                            <div className="font-mono text-xs text-muted-foreground">{item.period}</div>
                          </div>
                          <h3 className="font-heading text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                            {item.title}
                          </h3>
                          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-mono text-xs text-accent px-2 py-1 bg-accent/10 border border-accent/30 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="pt-3 border-t border-primary/20">
                            <div className="font-mono text-xs text-muted-foreground mb-2">技术栈:</div>
                            <div className="flex flex-wrap gap-1">
                              {item.tech.map((t) => (
                                <span
                                  key={t}
                                  className="font-mono text-xs text-primary/80 px-2 py-0.5 bg-primary/5 border border-primary/20 rounded"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Center dot */}
                      <div className="relative flex-shrink-0 hidden md:block">
                        <div className="w-4 h-4 rounded-full bg-primary border-2 border-card shadow-[0_0_20px_rgba(0,240,255,0.6)]" />
                        {/* Connecting line */}
                        <div
                          className={`absolute top-1/2 w-8 h-0.5 bg-gradient-to-r ${
                            item.side === "left"
                              ? "right-full from-primary/60 to-transparent"
                              : "left-full from-primary/60 to-transparent"
                          }`}
                        />
                      </div>

                      {/* Empty space for alternating layout */}
                      <div className="w-full md:w-[calc(50%-2rem)] hidden md:block" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="border border-primary/20 bg-card/50 backdrop-blur-sm p-8 rounded-lg">
              <h2 className="font-heading text-3xl text-accent mb-6">技能矩阵</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-primary/30">
                      <th className="text-left py-3 px-4 font-mono text-sm text-accent">技能名称</th>
                      <th className="text-left py-3 px-4 font-mono text-sm text-accent">类别</th>
                      <th className="text-center py-3 px-4 font-mono text-sm text-accent">熟练度</th>
                      <th className="text-center py-3 px-4 font-mono text-sm text-accent">评分</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skills.map((skill, index) => (
                      <tr key={skill.name} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                        <td className="py-4 px-4 font-mono text-sm text-foreground">{skill.name}</td>
                        <td className="py-4 px-4">
                          <span className="font-mono text-xs text-muted-foreground px-2 py-1 border border-primary/20 rounded bg-primary/5">
                            {skill.category}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-3 h-3 rounded-sm ${
                                  i < Math.floor(skill.level / 20)
                                    ? "bg-primary shadow-[0_0_8px_rgba(0,240,255,0.5)]"
                                    : "bg-primary/20"
                                }`}
                              />
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="font-heading text-2xl text-primary">{skill.level}</span>
                          <span className="font-mono text-xs text-muted-foreground ml-1">/100</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 pt-6 border-t border-primary/20 flex items-center justify-between">
                <span className="font-mono text-sm text-muted-foreground">综合评估</span>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    平均分: {Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}
                  </span>
                  <span className="font-mono text-xs text-primary px-3 py-1 border border-primary/30 rounded bg-primary/5">
                    {skills.length} 项技能
                  </span>
                </div>
              </div>
            </section>

            <section className="border border-accent/30 bg-card/50 backdrop-blur-sm p-8 rounded-lg text-center">
              <h2 className="font-heading text-3xl text-accent mb-4">联系方式</h2>
              <p className="font-mono text-sm text-muted-foreground mb-6">
                有项目合作或技术交流？欢迎通过以下方式联系我。
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="px-6 py-2 border border-primary/30 rounded font-mono text-sm text-primary">
                  邮箱: 2978084195@qq.com
                </div>
                <div className="px-6 py-2 border border-primary/30 rounded font-mono text-sm text-primary">
                  手机: 19227240339
                </div>
              </div>
            </section>
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
