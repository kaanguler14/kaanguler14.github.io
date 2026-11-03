import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    company: "AI / Backend Engineer (Freelance)",
    role: "Remote / Bolu, Turkey",
    date: "Jun 2025 – Present",
    desc: [
      "Contributed backend and AI features to a production mobile application as an external developer, working with the core team across release cycles.",
      "Designed and integrated LLM-powered features (semantic search, a conversational assistant, and smart suggestions) through async FastAPI services calling OpenAI and Gemini APIs.",
      "Built and maintained REST endpoints consumed by the mobile client, tuning response latency, error handling, and clean API contracts.",
      "Pursued self-directed study in agentic architectures (LangGraph) and MLOps, applied across personal AI projects."
    ],
    tags: ["FastAPI", "OpenAI API", "Gemini API", "REST API", "LangGraph", "MLOps"]
  },
  {
    company: "Computer Vision Sub-Team Lead | Autonomous Vehicle",
    role: "TEDU (Funded Research), Ankara, Turkey",
    date: "Sep 2024 – Jun 2025",
    desc: [
      "Led a computer-vision engineering team building the real-time perception sub-system of an autonomous scale vehicle, owning model development, data pipelines, and on-vehicle integration.",
      "Developed object detection and semantic segmentation models in PyTorch and OpenCV, optimized for low-latency edge inference on resource-constrained hardware.",
      "Applied GPU/CUDA-aware optimization and model quantization to cut inference latency and memory footprint while preserving accuracy for real-time operation.",
      "Built an end-to-end ML platform with MLflow (experiment tracking, model versioning) and Optuna (automated hyperparameter optimization), establishing reproducibility and production-monitoring practices."
    ],
    tags: ["PyTorch", "OpenCV", "CUDA", "Model Quantization", "MLflow", "Optuna", "Edge Inference"]
  },
  {
    company: "Usta Bilgi Sistemleri",
    role: "Computer Engineer Intern",
    date: "Aug – Sep 2024",
    desc: [
      "Built backend components for a corporate document-signing application using .NET, React, and PostgreSQL.",
      "Implemented coordinate-based canvas positioning and image-processing routines for digital signature placement; containerized runtimes with Docker for predictable deployment."
    ],
    tags: [".NET", "React", "PostgreSQL", "Docker", "Image Processing"]
  },
  {
    company: "HAVELSAN",
    role: "Computer Engineer Intern",
    date: "Jul – Aug 2024",
    desc: [
      "Contributed to core backend system development in a defense-industry environment, working in C++ alongside a JavaScript / Node.js stack (Express.js, Vue.js).",
      "Built robust, enterprise-grade code following unit-testing methodologies, integrating native C++ modules into Node.js services via Koffi (foreign-function interface)."
    ],
    tags: ["C++", "Node.js", "Express.js", "Vue.js", "Koffi FFI", "Unit Testing"]
  },
  {
    company: "Ziraat Technology",
    role: "Computer Engineer Intern",
    date: "Jul – Sep 2023",
    desc: [
      "Developed RESTful APIs and MVC architectures for regulated financial applications using ASP.NET Core.",
      "Refactored relational SQL queries to reduce latency and increase pipeline capacity, under financial-sector compliance constraints."
    ],
    tags: ["ASP.NET Core", "SQL Server", "API Development", "Query Optimization"]
  }
];

const EDUCATION = [
  {
    school: "TED University",
    degree: "B.Sc. in Computer Engineering",
    date: "Sep 2020 – Jun 2025",
    gpa: "3.60 / 4.00",
    honors: "High Honors",
    location: "Ankara, Turkey",
    details: "Relevant Coursework: Machine Learning, Artificial Intelligence, Data Structures & Algorithms, Database Systems, Software Engineering, Computer Networks, Operating Systems, Linear Algebra, Probability & Statistics."
  }
];

const SKILL_CATEGORIES = [
  {
    name: "Deep Learning & CV",
    skills: ["PyTorch", "CNNs", "Transformers", "Object Detection", "Semantic Segmentation", "OpenCV", "CUDA"]
  },
  {
    name: "LLMs & Agentic Systems",
    skills: ["LangGraph", "LangChain", "LlamaIndex", "RAG", "vLLM", "Ollama", "Tool Calling", "Prompt Engineering"]
  },
  {
    name: "Backend & Databases",
    skills: ["Python", "FastAPI (async)", "C++", ".NET Core", "SQL Server", "PostgreSQL", "Redis", "Qdrant", "ChromaDB"]
  },
  {
    name: "MLOps & Infrastructure",
    skills: ["Docker", "GitHub Actions", "MLflow", "Optuna", "Git", "Unix/Linux"]
  }
];

const CERTIFICATIONS = [
  { name: "Unity Learn Patikası", date: "Sep 2023" },
  { name: "Python 301 - Advanced Python", date: "Feb 2023" },
  { name: "Machine Learning Introduction", date: "Feb 2023" }
];

const ACTIVITIES = [
  { name: "TEDU IEEE / Game Dev Society", role: "Supervisory Board / Unity Mentor for 8 teams" },
  { name: "AlecTed Team", role: "Shell Eco-Marathon autonomous-vehicle software" },
  { name: "Korfball & Basketball", role: "Provincial Champion / 10 Years School & Club Player" }
];

export default function Resume() {
  return (
    <section id="resume" className="bg-bg py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
           className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-xl">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted uppercase tracking-[0.3em]">Resume</span>
             </div>
             <h2 className="text-5xl md:text-6xl font-medium text-text-primary mb-6">
                Academic &amp; <span className="font-display italic">professional</span>
             </h2>
             <p className="text-muted text-sm md:text-base">
                A summary of my education, experience, skills, and honors.
             </p>
          </div>
          
          <a
            href="/Kaan_Guler_CV_KIRA.pdf"
            download
            className="flex items-center gap-4 px-8 py-4 rounded-full border border-stroke hover:bg-surface transition-colors"
          >
             <span className="text-sm font-medium tracking-widest uppercase">Download Full CV</span>
             <div className="w-8 h-8 rounded-full bg-text-primary flex items-center justify-center">
                <span className="text-bg text-xs">↓</span>
             </div>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Column: Education & Skills & Certs */}
          <div className="lg:col-span-4 space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display italic text-text-primary mb-8 underline decoration-accent/30 underline-offset-8">Education</h2>
              {EDUCATION.map((edu) => (
                <div key={edu.school} className="space-y-4">
                  <h3 className="text-xl font-medium text-text-primary">{edu.school}</h3>
                  <p className="text-muted text-sm">{edu.degree}</p>
                  <p className="text-muted text-xs uppercase tracking-widest">{edu.date}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 bg-surface border border-stroke rounded-full text-[10px] text-accent uppercase font-black tracking-tighter">GPA: {edu.gpa}</span>
                    <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] text-accent uppercase font-black tracking-tighter">{edu.honors}</span>
                  </div>
                  {edu.details && (
                    <p className="text-muted text-xs leading-relaxed pt-2 opacity-80 border-t border-stroke/50 mt-2">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-4xl font-display italic text-text-primary mb-8 underline decoration-accent/30 underline-offset-8">Skills</h2>
              <div className="space-y-6">
                {SKILL_CATEGORIES.map(cat => (
                  <div key={cat.name}>
                    <p className="text-accent text-[10px] uppercase tracking-[0.2em] font-bold mb-3">{cat.name}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map(skill => (
                        <span key={skill} className="px-3 py-1.5 bg-surface/40 border border-stroke rounded-lg text-[11px] text-text-primary/60">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl font-display italic text-text-primary mb-8 underline decoration-accent/30 underline-offset-8">Awards & Activities</h2>
              <div className="space-y-6">
                {CERTIFICATIONS.map(cert => (
                  <div key={cert.name} className="group">
                    <p className="text-text-primary text-sm group-hover:text-accent transition-colors">{cert.name}</p>
                    <p className="text-muted text-[10px] uppercase tracking-widest">{cert.date}</p>
                  </div>
                ))}
                <div className="h-px bg-stroke w-full my-4" />
                {ACTIVITIES.map(act => (
                  <div key={act.name}>
                    <p className="text-text-primary text-sm">{act.name}</p>
                    <p className="text-accent text-[10px] font-bold uppercase">{act.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Experience */}
          <div className="lg:col-span-8">
            <h2 className="text-4xl font-display italic text-text-primary mb-12 underline decoration-accent/30 underline-offset-8">Professional Journey</h2>
            <div className="space-y-16 border-l border-stroke pl-12 relative">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[57px] top-2 w-[18px] h-[18px] rounded-full bg-accent border-[5px] border-bg shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-125 transition-transform" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-3xl font-medium text-text-primary leading-tight">{exp.company}</h3>
                      <p className="text-accent text-base font-display italic opacity-80">{exp.role}</p>
                    </div>
                    <span className="text-[11px] text-accent font-black uppercase tracking-[0.2em] bg-accent/5 px-5 py-2.5 rounded-full border border-accent/20 h-fit">
                      {exp.date}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {exp.desc.map((item, i) => (
                      <li key={i} className="text-muted text-[15px] leading-relaxed flex gap-4">
                        <span className="text-accent mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent/30" /> 
                        <span className="opacity-80">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase tracking-[0.25em] text-text-primary/30 border border-stroke/50 px-3 py-1 rounded">#{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
