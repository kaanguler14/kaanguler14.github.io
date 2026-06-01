import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const WORDS = ["Build", "Train", "Deploy"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2700;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(onComplete, 400);
      }
    };

    requestAnimationFrame(step);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-12">
      {/* Top Left Label */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      {/* Center Word Rotator */}
      <div className="flex-1 flex items-center justify-center">
        <div className="h-20 md:h-32 overflow-hidden flex items-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={wordIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary"
            >
              {WORDS[wordIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Counter & Bar */}
      <div className="space-y-8">
        <div className="flex justify-end">
          <span className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
            {String(count).padStart(3, "0")}
          </span>
        </div>
        
        <div className="relative w-full h-[3px] bg-stroke/50 overflow-hidden">
          <motion.div
            className="absolute inset-0 accent-gradient"
            style={{
              scaleX: count / 100,
              transformOrigin: "left",
              boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
