import { useEffect, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={cn(
          "inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-all duration-300",
          scrolled && "shadow-md shadow-black/20"
        )}
      >
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group relative w-9 h-9 rounded-full p-[1px] overflow-hidden transition-transform hover:scale-110 flex items-center justify-center cursor-pointer"
        >
          <div className="absolute inset-0 accent-gradient group-hover:rotate-180 transition-transform duration-700" />
          <div className="relative w-full h-full rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary">KG</span>
          </div>
        </div>

        <div className="hidden md:block w-px h-5 bg-stroke mx-2" />

        {/* Links */}
        <div className="flex gap-1">
          {["Work", "Resume", "Journal", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors",
                item === "Work" 
                  ? "text-text-primary bg-stroke/50" 
                  : "text-muted hover:text-text-primary hover:bg-stroke/50"
              )}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="w-px h-5 bg-stroke mx-2" />

        <div className="flex gap-2">
          {/* Download CV Button */}
          <a
            href="/Kaan_Guler_CV.pdf"
            download
            className="group relative text-xs sm:text-sm rounded-full px-4 py-1.5 sm:py-2 transition-colors inline-block"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-1 bg-surface rounded-full px-4 py-1.5 sm:py-2 backdrop-blur-md border border-white/10">
              Download CV <span className="text-[10px]">↓</span>
            </span>
          </a>

          {/* Say Hi Button */}
          <a
            href="#contact"
            className="group relative text-xs sm:text-sm rounded-full px-4 py-1.5 sm:py-2 transition-colors inline-block"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-1 bg-surface rounded-full px-4 py-1.5 sm:py-2 backdrop-blur-md border border-white/10">
              Say hi <span className="text-[10px]">↗</span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
