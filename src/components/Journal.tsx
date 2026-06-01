import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Calendar, Clock, CheckCircle2 } from "lucide-react";

const ENTRIES = [
  {
    id: "research",
    title: "Energy Efficient CNNs for Autonomous Vehicles",
    date: "Mar 15, 2024",
    readTime: "Research Paper",
    image: "/project_automotive.png",
    isClickable: true,
  },
  {
    id: "devlog",
    title: "Computer Vision in Autonomous RC Cars",
    date: "Mar 1, 2024",
    readTime: "Dev Log",
    image: "/project_urban.png",
    isClickable: true,
  },
  {
    id: "zombie",
    title: "Game Development with Unity: Zombie Defense",
    date: "Feb 15, 2024",
    readTime: "Case Study",
    image: "/project_brand.png",
    isClickable: false,
  },
  {
    id: "banking",
    title: "Banking App Architecture (ASP.NET Core)",
    date: "Feb 1, 2024",
    readTime: "Technical Look",
    image: "/project_urban.png",
    isClickable: false,
  },
];

const DEVLOG_TIMELINE = [
  {
    date: "October 31, 2023",
    title: "Project Kickoff",
    desc: "Project officially started with university funding approval. Initial research phase began with a literature review on efficient computer vision models for autonomous vehicles.",
    points: [
      "Defined project scope and objectives",
      "Researched existing solutions and academic papers",
      "Created initial project timeline and milestones"
    ],
    tags: ["Planning", "Research"]
  },
  {
    date: "November 15, 2023",
    title: "Hardware Setup & Initial Testing",
    desc: "Selected and assembled the initial hardware components for the RC car platform.",
    points: [
      "RC car chassis selection and mechanical modification",
      "Camera and sensor mounting and calibration",
      "Initial control system setup and communication testing"
    ],
    tags: ["Hardware", "Embedded Systems"]
  },
  {
    date: "December 1, 2023",
    title: "Vision System — Phase 1",
    desc: "Implemented the basic vision system with lane detection capabilities for real-time processing.",
    points: [
      "Lane detection algorithm implementation with OpenCV",
      "Real-time image processing pipeline optimized for latency",
      "Performance profiling and optimization for embedded hardware"
    ],
    tags: ["Python", "OpenCV", "Computer Vision"]
  },
  {
    date: "January 15, 2024",
    title: "Neural Network Integration",
    desc: "Added deep learning capabilities for improved object detection and scene understanding.",
    points: [
      "Benchmarked and selected efficient CNN architecture for embedded deployment",
      "Dataset preparation, augmentation, and training pipeline",
      "Model quantization and optimization for real-time inference"
    ],
    tags: ["PyTorch", "Deep Learning", "CNN", "Model Optimization"]
  },
  {
    date: "February 1, 2024",
    title: "Control System Development",
    desc: "Developed the autonomous navigation control system driven by vision inputs.",
    points: [
      "PID controller implementation for steering and speed",
      "Path planning algorithm integrated with lane detection output",
      "ROS integration for modular communication between subsystems"
    ],
    tags: ["Python", "ROS", "Control Systems", "PID"]
  },
  {
    date: "March 15, 2024",
    title: "Testing & Optimization — Current Phase",
    desc: "Currently in the testing phase, focusing on system reliability and performance under varied conditions.",
    points: [
      "Comprehensive testing in various lighting and track conditions",
      "End-to-end latency optimization",
      "Documentation and codebase cleanup"
    ],
    tags: ["Testing", "Optimization", "Documentation"]
  }
];

type JournalEntry = (typeof ENTRIES)[number];

function renderEntryContent(entry: JournalEntry, options?: { soon?: boolean }) {
  return (
    <>
      <div className="w-full sm:w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border border-white/5">
        <img
          src={entry.image}
          alt=""
          className={`w-full h-full object-cover grayscale transition-all duration-500 ${
            entry.isClickable ? "group-hover:grayscale-0" : ""
          }`}
        />
      </div>

      <div className="flex-1 text-center sm:text-left">
        <h3
          className={`text-lg md:text-xl font-medium text-text-primary flex items-center justify-center sm:justify-start gap-2 ${
            entry.isClickable ? "group-hover:text-accent transition-colors" : ""
          }`}
        >
          {entry.title}
          {options?.soon && (
            <span className="text-[10px] text-muted font-normal uppercase tracking-widest bg-bg px-2.5 py-1 rounded-full border border-white/5 font-sans">
              Coming soon
            </span>
          )}
        </h3>
      </div>

      <div className="flex items-center gap-6 text-xs text-muted font-medium uppercase tracking-widest bg-bg/50 px-6 py-3 rounded-full border border-white/5">
        <span>{entry.readTime}</span>
        <div className="w-1 h-1 bg-stroke rounded-full" />
        <span>{entry.date}</span>
      </div>
    </>
  );
}

export default function Journal() {
  const [activeArticle, setActiveArticle] = useState<string | null>(null);

  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeArticle]);

  return (
    <section id="journal" className="bg-bg py-24 px-6 relative z-10">
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
                <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
             </div>
             <h2 className="text-5xl md:text-6xl font-medium text-text-primary mb-6">
                Recent <span className="font-display italic">thoughts</span>
             </h2>
             <p className="text-muted text-sm md:text-base">
                Exploring the intersection of deep learning, computer vision, and autonomous technologies.
             </p>
          </div>
        </motion.div>

        {/* Entries List */}
        <div className="flex flex-col gap-4">
          {ENTRIES.map((entry, index) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {entry.isClickable ? (
                <button
                  type="button"
                  onClick={() => setActiveArticle(entry.id)}
                  className="w-full group flex flex-col sm:flex-row items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors text-left cursor-pointer"
                >
                  {renderEntryContent(entry)}
                </button>
              ) : (
                <div
                  aria-disabled="true"
                  className="w-full flex flex-col sm:flex-row items-center gap-6 p-4 bg-surface/20 border border-stroke/60 rounded-[40px] sm:rounded-full text-left opacity-60"
                >
                  {renderEntryContent(entry, { soon: true })}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-surface border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-bg/50 text-text-primary hover:text-accent transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {activeArticle === "research" && (
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-accent uppercase tracking-widest mb-3 font-semibold">
                      <FileText size={14} />
                      <span>Research Paper</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium text-text-primary leading-tight font-display italic">
                      Energy Efficient CNNs for Autonomous Vehicles
                    </h2>
                    <p className="text-muted text-sm md:text-base mt-2">
                      Investigation of energy-efficient Convolutional Neural Networks for autonomous vehicles &amp; robotics
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 items-center justify-between p-4 bg-bg/50 border border-white/5 rounded-2xl">
                    <div className="flex gap-6 text-xs text-muted">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>March 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        <span>TED University • CMPE 490</span>
                      </div>
                    </div>
                    <a
                      href="/InvestigationOfEfficientCNNs.pdf"
                      download
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-text-primary text-bg font-medium text-sm hover:bg-stroke hover:text-text-primary transition-colors border border-transparent hover:border-stroke"
                    >
                      <Download size={14} />
                      <span>Download PDF</span>
                    </a>
                  </div>

                  {/* Embedded PDF */}
                  <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white">
                    <iframe
                      src="/InvestigationOfEfficientCNNs.pdf"
                      title="Investigation of Energy Efficient CNNs — Research Paper by Kaan Güler"
                      className="w-full h-[50vh] border-none"
                    />
                  </div>
                </div>
              )}

              {activeArticle === "devlog" && (
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-accent uppercase tracking-widest mb-3 font-semibold">
                      <Clock size={14} />
                      <span>Development Timeline</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium text-text-primary leading-tight font-display italic">
                      Autonomous RC Car — LAD Project
                    </h2>
                    <p className="text-muted text-sm mt-2">
                      Timeline and milestones of our university-funded autonomous vehicle project.
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-12 py-4">
                    {DEVLOG_TIMELINE.map((item, index) => (
                      <div key={index} className="relative space-y-3">
                        {/* Timeline Node */}
                        <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-text-primary border-4 border-surface shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                        
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                          <span className="text-xs text-muted font-semibold uppercase tracking-wider">{item.date}</span>
                          <h3 className="text-lg md:text-xl font-medium text-text-primary">{item.title}</h3>
                        </div>

                        <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                        
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-muted/80 pl-1">
                          {item.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <CheckCircle2 size={12} className="text-accent mt-0.5 flex-shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="text-[10px] text-text-primary/75 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 font-medium uppercase tracking-wider">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
