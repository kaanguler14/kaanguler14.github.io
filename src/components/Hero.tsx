import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { useHlsVideo } from "../hooks/useHlsVideo";

const ROLES = ["AI Engineer", "Deep Learning Specialist", "Computer Vision Engineer", "Agentic Systems Architect"];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useHlsVideo(videoRef);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(".name-reveal", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.1,
    })
    .to(".blur-in", {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1,
      stagger: 0.1,
    }, "-=1");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          GRADUATE '25
        </div>
        
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Kaan Güler
        </h1>

        <div className="blur-in flex flex-col items-center gap-4 mb-8">
          <div className="relative h-9 md:h-11 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIndex]}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-xl md:text-2xl font-display italic text-text-primary block"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted uppercase tracking-[0.25em]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.4)]" />
            <span>Based in Ankara, Turkey</span>
          </div>
        </div>

        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-12">
          Computer Engineering graduate (High Honors) and AI engineer specializing in real-time computer vision, model optimization, and autonomous multi-agent reasoning systems.
        </p>

        <div className="blur-in flex flex-wrap justify-center gap-4">
          <a
            href="#work"
            className="group relative rounded-full text-sm px-7 py-3.5 transition-all hover:scale-105 overflow-hidden flex items-center justify-center"
          >
            <span className="absolute inset-0 bg-text-primary group-hover:bg-bg transition-colors" />
            <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 p-[1px] rounded-full">
               <div className="w-full h-full bg-bg rounded-full" />
            </span>
            <span className="relative z-10 text-bg group-hover:text-text-primary font-medium">Explore Work</span>
          </a>

          <a
            href="#contact"
            className="group relative rounded-full text-sm px-7 py-3.5 transition-all hover:scale-105 border-2 border-stroke bg-bg text-text-primary hover:border-transparent flex items-center justify-center"
          >
             <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 rounded-full" />
             <div className="absolute inset-[1px] bg-bg rounded-full opacity-0 group-hover:opacity-100" />
             <span className="relative z-10">Get in touch</span>
          </a>
        </div>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] text-muted uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-10 bg-stroke overflow-hidden">
          <div className="w-full h-full bg-accent animate-scroll-down origin-top" />
        </div>
      </div>
    </section>
  );
}
