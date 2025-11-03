"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "projects", "experience", "skills", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">DEVELOPER / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Prathamesh
                  <br />
                  <span className="text-muted-foreground">Sankhe</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Full-stack developer building collaborative platforms and AI-powered solutions at the intersection of
                  <span className="text-foreground"> Next.js</span>,
                  <span className="text-foreground"> real-time systems</span>, and
                  <span className="text-foreground"> machine learning</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Open for opportunities
                  </div>
                  <div>Mumbai, India</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Development Head</div>
                  <div className="text-muted-foreground">@ Community of Coders, VJTI</div>
                  <div className="text-xs text-muted-foreground">Sep 2025 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "FastAPI", "React", "Supabase"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="projects"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Featured Projects</h2>
              <div className="text-sm text-muted-foreground font-mono">2024 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  name: "Mappa",
                  period: "Feb – Oct 2025",
                  description:
                    "Real-time collaborative workspace with document editing, code collaboration, video conferencing, and task management for 100+ concurrent users.",
                  tech: {
                    frontend: ["Next.js", "TypeScript"],
                    backend: ["FastAPI", "Supabase"],
                    realtime: ["Liveblocks", "Stream"],
                    infra: ["Docker"],
                  },
                  highlight: "Real-time sync with conflict-free editing",
                },
                {
                  name: "Veritas",
                  period: "Sep 2025 – Present",
                  description:
                    "AI-powered misinformation detection platform with advanced analytics for journalists and researchers, monitoring multiple social media platforms.",
                  tech: {
                    frontend: ["Next.js"],
                    backend: ["FastAPI", "Supabase"],
                    ml: ["HuggingFace"],
                    infra: ["Celery", "Redis", "Docker"],
                  },
                  highlight: "Trend detection with BERTopic clustering",
                },
                {
                  name: "Eloquence",
                  period: "Oct 2024 – May 2025",
                  description:
                    "AI public speaking coach analyzing speech pace, tone, facial expressions, and vocabulary with 90% accuracy on custom datasets.",
                  tech: {
                    frontend: ["Next.js"],
                    backend: ["Flask"],
                    ml: ["PyTorch", "OpenCV"],
                    database: ["MongoDB"],
                  },
                  highlight: "Real-time emotion & sentiment analysis",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {project.name}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{project.highlight}</h3>
                      <div className="text-muted-foreground text-sm">{project.period}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{project.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-col gap-3">
                    {Object.entries(project.tech).map(([category, techs]) => (
                      <div key={category} className="space-y-2">
                        <div className="text-xs text-muted-foreground/60 font-mono tracking-wider uppercase">
                          {category}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1.5 text-xs font-medium bg-muted/50 text-muted-foreground rounded-md border border-border/50 group-hover:bg-muted group-hover:border-muted-foreground/30 group-hover:text-foreground transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">2023 — Present</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  role: "Development Head",
                  company: "Community of Coders, VJTI",
                  period: "Sep 2025 – Present",
                  description:
                    "Leading 15-member development team, organizing coding events for 120+ participants, mentoring 50+ juniors in full-stack development and cloud deployment.",
                },
                {
                  role: "IT Student & Developer",
                  company: "Veermata Jijabai Technological Institute",
                  period: "Aug 2023 – Present",
                  description:
                    "Pursuing Bachelor of Technology in Information Technology at VJTI. Building innovative full-stack applications, leading development initiatives, and contributing to the campus tech community.",
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-lg sm:text-xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {exp.period}
                    </div>
                  </div>

                  <div className="lg:col-span-10 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{exp.role}</h3>
                      <div className="text-muted-foreground">{exp.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Technical Skills</h2>

            <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
              {[
                {
                  category: "Languages",
                  items: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
                },
                {
                  category: "Frontend & Backend",
                  items: ["Next.js", "React", "FastAPI", "Node.js", "Express", "Flask"],
                },
                {
                  category: "Databases & Tools",
                  items: ["Supabase", "MongoDB", "Redis", "Docker", "Vercel", "Git"],
                },
                {
                  category: "AI/ML",
                  items: ["PyTorch", "TensorFlow", "scikit-learn", "Generative AI", "RAG", "Agentic AI"],
                },
                {
                  category: "Real-Time & Infrastructure",
                  items: ["Liveblocks", "Stream API", "Celery", "OpenCV", "WebSockets"],
                },
                {
                  category: "Specializations",
                  items: ["Full-Stack Development", "Real-Time Systems", "Collaborative Apps", "AI Integration"],
                },
              ].map((skillGroup, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-border/30">
                    <div className="w-1 h-4 bg-muted-foreground rounded-sm"></div>
                    <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div
                        key={skill}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[4] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Open to collaborations, mentorship opportunities, and conversations about full-stack development,
                  AI/ML, and real-time systems.
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">FIND ME</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "PMS61", url: "https://github.com/PMS61" },
                  {
                    name: "LinkedIn",
                    handle: "Prathamesh Sankhe",
                    url: "https://www.linkedin.com/in/prathamesh-sankhe-302294294/",
                  },
                  { name: "Email", handle: "Get in touch", url: "mailto:prathamesh.sankhe1606@gmail.com" },
                  { name: "Phone", handle: "+91 9987695273", url: "tel:+919987695273" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Prathamesh Sankhe. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
