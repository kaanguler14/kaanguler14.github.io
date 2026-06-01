import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "CurriculumForge",
    category: "LLM / Multi-Agent Systems",
    image: "/project_brand.png",
    colSpan: "md:col-span-7",
    link: "https://github.com/kaanguler14/CurriculumForge",
  },
  {
    title: "TestForge",
    category: "AI Testing / MLOps",
    image: "/project_human.png",
    colSpan: "md:col-span-5",
    link: "https://github.com/kaanguler14/TestForge",
  },
  {
    title: "Pressing Analyst Bot",
    category: "Context Engineering / Prompt Engineering",
    image: "/project_urban.png",
    colSpan: "md:col-span-5",
    link: "https://github.com/kaanguler14/Twelve-GPT-Educational",
  },
  {
    title: "InsightMail",
    category: "On-Premise AI / FastAPI",
    image: "/project_automotive.png",
    colSpan: "md:col-span-7",
    link: "https://github.com/kaanguler14/InsightMail",
  },
];


export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-24 px-6 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-medium text-text-primary mb-6">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-muted text-sm md:text-base">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>

          <a
            href="https://github.com/kaanguler14"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stroke hover:border-transparent group relative transition-all"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-[1px] rounded-full bg-bg" />
            <span className="relative z-10 text-sm">View all work ↗</span>
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-surface border border-stroke aspect-[4/3] md:aspect-auto md:h-[450px] block ${project.colSpan}`}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Halftone Overlay */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "4px 4px" }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-500 flex items-center justify-center">
                <div className="relative group/pill">
                  <span className="absolute inset-[-2px] rounded-full accent-gradient-animate opacity-0 group-hover/pill:opacity-100 transition-opacity" />
                  <div className="relative z-10 px-6 py-3 bg-white rounded-full flex items-center gap-2 shadow-xl shadow-black/20">
                    <span className="text-black text-sm font-medium">View —</span>
                    <span className="text-black text-sm font-display italic font-bold">{project.title}</span>
                  </div>
                </div>
              </div>

              {/* Static Label (Optional/Fallback) */}
              <div className="absolute bottom-6 left-6 z-10 group-hover:opacity-0 transition-opacity">
                <span className="text-xs text-text-primary/70 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10 uppercase tracking-widest">{project.category}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
