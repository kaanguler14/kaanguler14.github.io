import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useHlsVideo } from "../hooks/useHlsVideo";

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useHlsVideo(videoRef);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    gsap.to(marquee, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <footer id="contact" className="relative bg-bg pt-32 pb-12 overflow-hidden">
      {/* Background Video (Flipped) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="border-y border-white/5 py-12 mb-24 overflow-hidden whitespace-nowrap">
          <div ref={marqueeRef} className="inline-block text-7xl md:text-9xl font-display italic text-text-primary/10 uppercase tracking-tighter">
            {Array(10).fill("BUILD • TRAIN • DEPLOY • OPTIMIZE • ").join("")}
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-medium text-text-primary mb-12">
              Ready for the next <span className="font-display italic text-accent">challenge?</span>
            </h2>
            
            <a 
              href="mailto:glerkaan@yahoo.com" 
              className="group relative px-12 py-6 rounded-full overflow-hidden transition-transform hover:scale-105"
            >
              <span className="absolute inset-0 accent-gradient animate-gradient-shift" />
              <div className="absolute inset-[1px] bg-bg rounded-full group-hover:bg-transparent transition-colors" />
              <span className="relative z-10 text-xl font-medium text-text-primary group-hover:text-bg transition-colors">
                Say hello — glerkaan@yahoo.com
              </span>
            </a>
          </div>


          {/* Social & Legal */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-stroke">
            <div className="flex gap-8">
              <a href="https://linkedin.com/in/gulerkaan" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors text-sm uppercase tracking-widest">LinkedIn</a>
              <a href="https://github.com/kaanguler14" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors text-sm uppercase tracking-widest">GitHub</a>
            </div>
            
            <div className="flex items-center gap-3 bg-surface/50 px-4 py-2 rounded-full border border-white/5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              <span className="text-[10px] text-text-primary uppercase tracking-[0.2em]">Available for projects</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
