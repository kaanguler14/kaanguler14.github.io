import { motion } from "framer-motion";

const CV_PDF_URL = "/Kaan_Guler_CV_KIRA.pdf";
const CV_PAGE_URL = "/cv.html";
// Google Docs viewer — renders in every browser without plugin
const GDOCS_URL = `https://docs.google.com/viewer?url=https://kaanguler14.github.io/Kaan_Guler_CV_KIRA.pdf&embedded=true`;

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

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            {/* Full page link */}
            <a
              href={CV_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-stroke hover:bg-surface transition-colors text-sm font-medium tracking-wide"
            >
              <span>Open full page</span>
              <span className="text-xs opacity-60">↗</span>
            </a>
            {/* Download */}
            <a
              href={CV_PDF_URL}
              download="Kaan_Guler_CV.pdf"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-text-primary text-bg hover:opacity-90 transition-opacity text-sm font-medium tracking-wide"
            >
              <span>Download PDF</span>
              <span className="text-xs">↓</span>
            </a>
          </div>
        </motion.div>

        {/* PDF Viewer Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden border border-stroke"
        >
          {/* Toolbar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-stroke bg-surface">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white/10 block" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10 block" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10 block" />
              <div className="w-px h-4 bg-stroke mx-1" />
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse block" />
                <span className="text-xs text-muted tracking-widest">Kaan_Guler_CV.pdf</span>
              </div>
            </div>
            <a
              href={CV_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] text-muted hover:text-text-primary transition-colors"
            >
              Full page ↗
            </a>
          </div>

          {/* Google Docs embedded viewer — works in all browsers */}
          <iframe
            src={GDOCS_URL}
            title="Kaan Güler — Curriculum Vitae"
            className="w-full bg-surface"
            style={{ height: "85vh", minHeight: "600px", border: "none", display: "block" }}
            loading="lazy"
            allow="autoplay"
          />
        </motion.div>

        {/* Direct link hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center text-xs text-muted tracking-widest"
        >
          Direct link:{" "}
          <a
            href={CV_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline underline-offset-4"
          >
            kaanguler14.github.io/cv.html
          </a>
        </motion.p>

      </div>
    </section>
  );
}
