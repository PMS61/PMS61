"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { 
  Cpu, 
  Database, 
  Globe, 
  Layout, 
  Sparkles, 
  Terminal
} from "lucide-react"

type StyleMode = "minimal" | "neobrutalism" | "claymorphism" | "glassmorphism"

export default function Home() {
  const [styleMode, setStyleMode] = useState<StyleMode>("minimal")
  const [activeSection, setActiveSection] = useState("")
  const [projectsLoaded, setProjectsLoaded] = useState(false)
  const sectionsRef = useRef<(HTMLElement | null)[]>([null, null, null, null, null, null])

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjectsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setProjectsLoaded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'projects') {
              setProjectsLoaded(true);
            } else {
              entry.target.classList.remove("opacity-0");
              entry.target.classList.add("animate-fade-in-up");
            }
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -50% 0px" }
    );

    const timer = setTimeout(() => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.observe(section);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [setProjectsLoaded]);

  const getStyleClasses = (baseClasses: string, sectionType: "card" | "button" | "container" | "text" | "nav" | "pill") => {
    if (styleMode === "minimal") return baseClasses;

    switch (sectionType) {
      case "card":
        if (styleMode === "neobrutalism") return `${baseClasses} border-4 border-white neo-shadow-white bg-zinc-900 text-white rounded-none transition-none group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:neo-shadow-lg-white`;
        if (styleMode === "claymorphism") return `${baseClasses} clay-card border-none transition-transform hover:scale-[1.02]`;
        if (styleMode === "glassmorphism") return `${baseClasses} glass-card rounded-2xl hover:bg-white/10 transition-all duration-500`;
        break;
      case "button":
        if (styleMode === "neobrutalism") return "border-2 border-white neo-shadow-white bg-yellow-400 text-black font-bold rounded-none px-4 py-2";
        if (styleMode === "claymorphism") return "bg-blue-400 text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all active:scale-95";
        if (styleMode === "glassmorphism") return "glass-card px-6 py-2 rounded-full hover:bg-white/20 transition-all";
        break;
      case "text":
        if (styleMode === "neobrutalism") return "font-black tracking-tighter uppercase italic text-white";
        if (styleMode === "claymorphism") return "font-bold text-blue-600 dark:text-blue-400";
        if (styleMode === "glassmorphism") return "text-white/90 drop-shadow-sm font-medium";
        break;
      case "nav":
        if (styleMode === "neobrutalism") return `w-5 h-5 border-2 border-white rounded-none ${activeSection === baseClasses ? "bg-yellow-400" : "bg-zinc-900"}`;
        if (styleMode === "claymorphism") return `w-3 h-3 rounded-full shadow-inner ${activeSection === baseClasses ? "bg-blue-500 scale-125" : "bg-blue-200"}`;
        if (styleMode === "glassmorphism") return `w-2 h-8 rounded-full blur-[1px] ${activeSection === baseClasses ? "bg-white/80 shadow-[0_0_10px_white]" : "bg-white/20"}`;
        break;
      case "pill":
        if (styleMode === "neobrutalism") return "px-3 py-1 text-xs border-2 border-white bg-yellow-400 text-black font-bold rotate-[-1deg] hover:rotate-0 transition-transform cursor-default shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]";
        if (styleMode === "claymorphism") return "px-3 py-1 text-xs bg-white/10 dark:bg-black/20 rounded-full shadow-inner border border-white/10 text-muted-foreground hover:text-blue-400 transition-colors cursor-default";
        if (styleMode === "glassmorphism") return "px-3 py-1 text-xs glass-card rounded-full border-white/5 text-white/70 hover:text-white hover:border-white/20 transition-all cursor-default";
        break;
    }
    return baseClasses;
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 relative overflow-x-hidden ${
      styleMode === "glassmorphism" ? "bg-zinc-950 text-white" : 
      styleMode === "claymorphism" ? "bg-zinc-950 text-foreground" : "bg-background text-foreground"
    }`}>
      {/* Background elements for Glassmorphism */}
      {styleMode === "glassmorphism" && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-emerald-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-amber-600/10 rounded-full blur-[120px] animate-pulse delay-500"></div>
        </div>
      )}

      {/* Background elements for Claymorphism */}
      {styleMode === "claymorphism" && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
      )}

      {/* Style Switcher */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-2 p-1 bg-background/80 backdrop-blur-md border border-border rounded-full shadow-xl">
        {(["minimal", "neobrutalism", "claymorphism", "glassmorphism"] as StyleMode[]).map((mode) => (
          <button
            key={mode}
            onClick={() => setStyleMode(mode)}
            className={`px-3 py-1 text-[10px] uppercase tracking-widest rounded-full transition-all ${
              styleMode === mode ? "bg-foreground text-background" : "hover:bg-muted"
            }`}
          >
            {mode}
          </button>
        ))}
      </div>

      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "projects", "experience", "achievements", "skills", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`transition-all duration-500 ${getStyleClasses(section, "nav")} ${
                styleMode === "minimal" ? (activeSection === section ? "bg-foreground w-2 h-8 rounded-full" : "bg-muted-foreground/30 hover:bg-muted-foreground/60 w-2 h-8 rounded-full") : ""
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className={`text-sm font-mono tracking-wider ${styleMode === 'neobrutalism' ? 'bg-black text-white px-2 py-1 w-fit' : 'text-muted-foreground'}`}>
                  DEVELOPER / 2026
                </div>
                <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight ${styleMode === 'neobrutalism' ? 'font-black uppercase italic' : ''}`}>
                  <span className={`${styleMode === 'neobrutalism' ? 'text-yellow-400' : ''}`}>Prathamesh</span>
                  <br />
                  <span className={`${styleMode === 'neobrutalism' ? 'text-lime-400' : 'text-muted-foreground'}`}>Sankhe</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className={`text-lg sm:text-xl leading-relaxed ${styleMode === 'neobrutalism' ? 'bg-zinc-900 text-white p-4 border-2 border-white neo-shadow-white' : 'text-muted-foreground'}`}>
                  Full-stack developer building collaborative platforms and AI-powered solutions at the intersection of
                  <span className={styleMode === 'neobrutalism' ? 'font-bold underline decoration-pink-500' : 'text-foreground'}> Next.js</span>,
                  <span className={styleMode === 'neobrutalism' ? 'font-bold underline decoration-blue-500' : 'text-foreground'}> real-time systems</span>, and
                  <span className={styleMode === 'neobrutalism' ? 'font-bold underline decoration-yellow-500' : 'text-foreground'}> machine learning</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm">
                  <div className={`flex items-center gap-2 ${styleMode === 'neobrutalism' ? 'bg-green-400 text-black px-3 py-1 border-2 border-black font-bold rotate-1' : 'text-muted-foreground'}`}>
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                    Open for opportunities
                  </div>
                  <div className={styleMode === 'neobrutalism' ? 'bg-blue-400 text-black px-3 py-1 border-2 border-black font-bold -rotate-1' : 'text-muted-foreground'}>
                    Mumbai, India
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className={`space-y-4 p-6 ${getStyleClasses("", "card")}`}>
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className={`text-xl ${getStyleClasses("", "text")}`}>Development Head</div>
                  <div className="text-muted-foreground font-medium">@ Community of Coders, VJTI</div>
                  <div className="text-xs text-muted-foreground">Sep 2025 — Present</div>
                </div>
              </div>

              <div className={`space-y-4 p-6 ${getStyleClasses("", "card")}`}>
                <div className="text-sm text-muted-foreground font-mono">TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "FastAPI", "React", "Supabase"].map((skill) => (
                    <span
                      key={skill}
                      className={styleMode === "neobrutalism" ? "px-3 py-1 text-xs border-2 border-black bg-yellow-300 font-bold" : "px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"}
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
          className={`min-h-screen py-20 sm:py-32 ${projectsLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className={`text-3xl sm:text-4xl font-light ${getStyleClasses("", "text")}`}>Featured Projects</h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  name: "TrendFall",
                  github: "https://github.com/PMS61/Trendfall",
                  description:
                    "Viral trend intelligence platform scraper scraping live hashtag data from Twitter/X and meme data from KnowYourMeme, producing SHAP-explainable trend forecasts using XGBoost.",
                  tech: {
                    frontend: ["Next.js 16", "React 19"],
                    backend: ["FastAPI", "Supabase"],
                    ml: ["XGBoost", "SHAP", "Groq (Llama-3)"],
                    scrapers: ["SerpApi", "Capacitor"],
                  },
                  highlight: "Multi-platform viral trend intelligence system",
                },
                {
                  name: "CogniSphere",
                  github: "https://github.com/PMS61/CogniSphere",
                  description:
                    "AI-powered 3D learning platform featuring a 3D avatar tutor that delivers multimodal RAG experiences, combining lecture notes, PDFs, and diagrams into personalized learning roadmaps.",
                  tech: {
                    frontend: ["Next.js", "React Three Fiber"],
                    backend: ["FastAPI", "Supabase"],
                    ai: ["Gemini", "RAG", "Tesseract.js"],
                    vision: ["OpenCV"],
                  },
                  highlight: "AI tutor with interactive 3D avatars",
                },
                {
                  name: "Mappa",
                  github: "https://github.com/Amal-Verma/Collaborative-IDE",
                  description:
                    "Real-time collaborative workspace for 100+ concurrent users with live docs, code execution, and video conferencing.",
                  tech: {
                    frontend: ["Next.js", "TypeScript"],
                    backend: ["FastAPI", "Supabase"],
                    realtime: ["Liveblocks", "Stream"],
                    infra: ["Docker"],
                  },
                  highlight: "Real-time sync with conflict-free editing",
                },
                {
                  name: "Eloquence",
                  github: "https://github.com/PMS61/Eloquence",
                  description:
                    "AI public speaking coach that analyzes pace, tone, filler words, and facial expressions in real-time, delivering structured feedback reports.",
                  tech: {
                    frontend: ["Next.js"],
                    backend: ["Flask"],
                    ml: ["PyTorch", "OpenCV"],
                    database: ["MongoDB"],
                  },
                  highlight: "Real-time AI voice & facial sentiment analysis",
                },
                {
                  name: "Veritas",
                  github: "https://github.com/PMS61/Veritas",
                  description:
                    "AI-powered misinformation detection platform with advanced analytics for journalists and researchers, monitoring multiple social media platforms.",
                  tech: {
                    frontend: ["Next.js"],
                    backend: ["FastAPI", "Supabase"],
                    ml: ["HuggingFace"],
                    infra: ["Celery", "Redis", "Docker"],
                  },
                  highlight: "Misinformation detection with advanced analytics",
                },
                {
                  name: "NeuroTwin",
                  github: "https://github.com/xyz-harshal/Airavat",
                  description:
                    "Digital brain twin platform that creates personalized models from EEG data, enabling medical professionals to analyze patterns and predict surgical outcomes.",
                  tech: {
                    frontend: ["Next.js", "React 19"],
                    backend: ["FastAPI", "Python"],
                    ml: ["PyTorch", "MNE", "Gemini API"],
                    database: ["Supabase"],
                  },
                  highlight: "EEG analysis with treatment simulation",
                },
                {
                  name: "SoulBuddy",
                  github: "https://github.com/ghruank/Soul_Buddy",
                  description:
                    "AI-powered spiritual guide platform delivering personalized guidance through astrology and numerology with Kundali generation and meditation content.",
                  tech: {
                    frontend: ["Next.js", "Tailwind CSS"],
                    backend: ["Flask"],
                    ml: ["Langflow", "NLP"],
                    database: ["AstraDB"],
                  },
                  highlight: "Astrological insights with AI-powered chatbot",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className={`group grid lg:grid-cols-12 gap-4 sm:gap-8 p-6 sm:p-8 transition-all duration-500 border-b border-border/50 ${getStyleClasses("", "card")}`}
                >
                  <div className="lg:col-span-2">
                    <div className={`${project.name === "CogniSphere" ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"} font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500 ${styleMode === 'neobrutalism' ? 'font-black uppercase italic text-black dark:text-white' : ''}`}>
                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className={`text-lg sm:text-xl font-medium ${getStyleClasses("", "text")}`}>{project.highlight}</h3>
                    </div>
                    <p className={`leading-relaxed max-w-lg ${styleMode === 'neobrutalism' ? 'text-black dark:text-white font-medium' : 'text-muted-foreground'}`}>{project.description}</p>
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
                              className={styleMode === "neobrutalism" ? "px-2.5 py-1.5 text-[10px] font-bold border-2 border-black bg-white text-black" : "px-2.5 py-1.5 text-xs font-medium bg-muted/50 text-muted-foreground rounded-md border border-border/50 group-hover:bg-muted group-hover:border-muted-foreground/30 group-hover:text-foreground transition-all duration-300"}
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
              <h2 className={`text-3xl sm:text-4xl font-light ${getStyleClasses("", "text")}`}>Experience</h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  role: "Development Head",
                  company: "Community of Coders, VJTI",
                  period: "Sep 2025 – Present",
                  description:
                    "Leading 15-member development team, organizing coding events for 120+ participants, supervising building of event platforms using Next.js and Supabase, and mentoring 50+ juniors in full-stack development and cloud deployment.",
                },
                {
                  role: "IT Student & Developer",
                  company: "Veermata Jijabai Technological Institute",
                  period: "Aug 2023 – Present",
                  description:
                    "Bachelor of Technology in Information Technology. Building innovative full-stack and AI-driven solutions while contributing to the campus tech community.",
                },
                {
                  role: "HSC Student",
                  company: "Nirmala College of Science and Commerce",
                  period: "May 2023",
                  description:
                    "Achieved 77% in HSC and 99.43 percentile in MHT-CET.",
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className={`group grid lg:grid-cols-12 gap-4 sm:gap-8 p-6 sm:p-8 border-b border-border/50 transition-all duration-500 ${getStyleClasses("", "card")}`}
                >
                  <div className="lg:col-span-2">
                    <div className={`text-lg sm:text-xl font-light group-hover:text-foreground transition-colors duration-500 ${styleMode === 'neobrutalism' ? 'font-bold bg-black text-white p-2 w-fit' : 'text-muted-foreground'}`}>
                      {exp.period}
                    </div>
                  </div>

                  <div className="lg:col-span-10 space-y-3">
                    <div>
                      <h3 className={`text-lg sm:text-xl font-medium ${getStyleClasses("", "text")}`}>{exp.role}</h3>
                      <div className="text-muted-foreground font-medium">{exp.company}</div>
                    </div>
                    <p className={`leading-relaxed max-w-lg ${styleMode === 'neobrutalism' ? 'text-black dark:text-white font-medium' : 'text-muted-foreground'}`}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="achievements"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className={`text-3xl sm:text-4xl font-light ${getStyleClasses("", "text")}`}>Achievements</h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  title: "Winner, Gen AI Domain",
                  event: "KJSSE Datathon 2026",
                  description: "Secured 1st place among 50+ competing teams for best application of Generative AI (Project: TrendFall).",
                },
                {
                  title: "Best UI/UX Award",
                  event: "SPIT Hackathon 2025",
                  description: "Recognized for outstanding interface design and user experience (Project: Mappa).",
                },
                {
                  title: "Active Hackathon Participant",
                  event: "National & Inter-college Levels",
                  description: "Competed in 12+ hackathons, consistently building full-stack and AI-driven solutions under time constraints.",
                },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className={`group grid lg:grid-cols-12 gap-4 sm:gap-8 p-6 sm:p-8 border-b border-border/50 transition-all duration-500 ${getStyleClasses("", "card")}`}
                >
                  <div className="lg:col-span-12 space-y-3">
                    <div>
                      <h3 className={`text-lg sm:text-xl font-medium ${getStyleClasses("", "text")}`}>{achievement.title}</h3>
                      <div className="text-muted-foreground font-medium">{achievement.event}</div>
                    </div>
                    <p className={`leading-relaxed max-w-2xl ${styleMode === 'neobrutalism' ? 'text-black dark:text-white font-medium' : 'text-muted-foreground'}`}>{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          ref={(el) => (sectionsRef.current[4] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className={`text-3xl sm:text-4xl font-light ${getStyleClasses("", "text")}`}>Technical Skills</h2>

            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  category: "Languages",
                  icon: <Terminal className="w-4 h-4" />,
                  items: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
                },
                {
                  category: "Frameworks",
                  icon: <Layout className="w-4 h-4" />,
                  items: ["Next.js", "React", "FastAPI", "Node.js", "Express", "Flask", "PyTorch", "scikit-learn", "OpenCV", "Tailwind CSS"],
                },
                {
                  category: "Databases & Tools",
                  icon: <Database className="w-4 h-4" />,
                  items: ["Supabase", "MongoDB", "Redis", "Docker", "Git", "Vercel", "Selenium", "Capacitor"],
                },
                {
                  category: "AI/ML",
                  icon: <Sparkles className="w-4 h-4" />,
                  items: ["Generative AI", "RAG", "XGBoost", "SHAP", "CNN", "LSTM", "Agentic AI", "Prompt Engineering"],
                },
                {
                  category: "APIs & Services",
                  icon: <Globe className="w-4 h-4" />,
                  items: ["Groq (Llama-3)", "OpenAI", "Google Gemini", "Liveblocks", "SerpApi", "Stream", "PRAW (Reddit)"],
                },
                {
                  category: "Specializations",
                  icon: <Cpu className="w-4 h-4" />,
                  items: ["Full-Stack", "Real-Time Systems", "Collaborative Apps", "AI Integration", "Trend Intelligence"],
                },
              ].map((skillGroup, index) => (
                <div key={index} className={`space-y-6 p-8 flex flex-col ${getStyleClasses("", "card")}`}>
                  <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                    <div className={`p-2 rounded-lg ${styleMode === 'neobrutalism' ? 'bg-black text-white border-2 border-black rotate-3' : 'bg-muted text-muted-foreground'}`}>
                      {skillGroup.icon}
                    </div>
                    <h3 className={`text-sm font-semibold tracking-tight uppercase ${getStyleClasses("", "text")}`}>
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {skillGroup.items.map((skill) => (
                      <div
                        key={skill}
                        className={`${getStyleClasses("", "pill")} ${
                          styleMode === 'minimal' ? 'px-3 py-1 text-xs border border-border rounded-full text-muted-foreground hover:border-foreground/50 hover:text-foreground transition-all cursor-default' : ''
                        }`}
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

        <section id="connect" ref={(el) => (sectionsRef.current[5] = el)} className="min-h-screen py-16 sm:py-20 opacity-0">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-4 sm:space-y-6">
              <h2 className={`text-3xl sm:text-4xl font-light ${getStyleClasses("", "text")}`}>Let's Connect</h2>

              <div className="space-y-4">
                <p className={`text-lg sm:text-xl leading-relaxed ${styleMode === 'neobrutalism' ? 'text-black dark:text-white font-bold' : 'text-muted-foreground'}`}>
                  Open to collaborations, mentorship opportunities, and conversations about full-stack development,
                  AI/ML, and real-time systems.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
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
                    className={`group p-4 transition-all duration-300 ${getStyleClasses("", "card")} ${styleMode === 'minimal' ? 'border border-border rounded-lg hover:border-muted-foreground/50 hover:shadow-sm' : ''}`}
                  >
                    <div className="space-y-2">
                      <div className={`text-foreground group-hover:text-muted-foreground transition-colors duration-300 ${getStyleClasses("", "text")}`}>
                        {social.name}
                      </div>
                      <div className={`text-sm ${styleMode === 'neobrutalism' ? 'text-black dark:text-white font-medium' : 'text-muted-foreground'}`}>{social.handle}</div>
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
              <div className="text-sm text-muted-foreground">© 2026 Prathamesh Sankhe. All rights reserved.</div>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
