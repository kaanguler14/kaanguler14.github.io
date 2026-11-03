import { motion } from "framer-motion";

export default function CV() {
  return (
    <section id="cv" className="bg-bg py-24 px-6">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">CV</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-medium text-text-primary mb-6">
              Curriculum <span className="font-display italic">Vitae</span>
            </h2>
            <p className="text-muted text-sm md:text-base">
              AI Engineer · Agentic AI &amp; LLM Systems · TED University Graduate
            </p>
          </div>

          <a
            href="/Kaan_Guler_CV_KIRA.pdf"
            download="Kaan_Guler_CV.pdf"
            className="flex items-center gap-4 px-8 py-4 rounded-full border border-stroke hover:bg-surface transition-colors shrink-0"
          >
            <span className="text-sm font-medium tracking-widest uppercase">Download PDF</span>
            <div className="w-8 h-8 rounded-full bg-text-primary flex items-center justify-center">
              <span className="text-bg text-xs">↓</span>
            </div>
          </a>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden border border-stroke bg-surface"
        >
          {/* Toolbar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-stroke bg-surface/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              {/* Traffic-light dots */}
              <span className="w-3 h-3 rounded-full bg-white/10 block" />
              <span className="w-3 h-3 rounded-full bg-white/10 block" />
              <span className="w-3 h-3 rounded-full bg-white/10 block" />
              <div className="w-px h-4 bg-stroke mx-2" />
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-muted tracking-widest">Kaan_Guler_CV.pdf</span>
              </div>
            </div>
            <a
              href="/Kaan_Guler_CV_KIRA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] text-muted hover:text-text-primary transition-colors"
            >
              Open in new tab ↗
            </a>
          </div>

          {/* iframe */}
          <iframe
            src="/Kaan_Guler_CV_KIRA.pdf"
            title="Kaan Güler — Curriculum Vitae"
            className="w-full bg-white"
            style={{ height: "85vh", minHeight: "600px", border: "none", display: "block" }}
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
}
