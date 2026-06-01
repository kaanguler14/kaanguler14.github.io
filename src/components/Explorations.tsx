import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const EXPLORATIONS = [
  { id: 1, image: "/project_automotive.png", rotate: -5 },
  { id: 2, image: "/project_urban.png", rotate: 8 },
  { id: 3, image: "/project_brand.png", rotate: -3 },
  { id: 4, image: "/project_urban.png", rotate: 6 },
  { id: 5, image: "/project_automotive.png", rotate: -8 },
  { id: 6, image: "/project_brand.png", rotate: 4 },
];

export default function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the header
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      // Parallax columns
      gsap.to(leftColRef.current, {
        y: "-30vh",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      gsap.to(rightColRef.current, {
        y: "30vh",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-bg overflow-hidden">
      {/* Pinned Header */}
      <div ref={contentRef} className="absolute inset-0 h-screen flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="text-center px-6 pointer-events-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-6xl md:text-8xl font-medium text-text-primary mb-8">
            Visual <span className="font-display italic">playground</span>
          </h2>
          <div className="flex flex-col items-center gap-8">
            <p className="text-muted text-sm md:text-base max-w-sm">
              A curated collection of experiments, side projects, and visual studies.
            </p>
            <a
              href="https://github.com/kaanguler14"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-8 py-4 rounded-full border border-stroke hover:bg-surface transition-colors"
            >
               <span className="text-sm font-medium tracking-widest uppercase">Visit GitHub</span>
               <div className="w-8 h-8 rounded-full bg-text-primary flex items-center justify-center">
                  <span className="text-bg text-xs">↗</span>
               </div>
            </a>
          </div>
        </div>
      </div>

      {/* Parallax Gallery */}
      <div className="relative z-0 max-w-[1400px] mx-auto px-6 pt-[50vh]">
        <div className="grid grid-cols-2 gap-12 md:gap-40">
          <div ref={leftColRef} className="flex flex-col gap-24 pt-24">
            {EXPLORATIONS.filter((_, i) => i % 2 === 0).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05, rotate: 0 }}
                style={{ rotate: item.rotate }}
                className="aspect-square w-full max-w-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 cursor-pointer border border-white/5"
              >
                <img src={item.image} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
          <div ref={rightColRef} className="flex flex-col gap-24">
            {EXPLORATIONS.filter((_, i) => i % 2 !== 0).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05, rotate: 0 }}
                style={{ rotate: item.rotate }}
                className="aspect-square w-full max-w-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 cursor-pointer border border-white/5"
              >
                <img src={item.image} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
