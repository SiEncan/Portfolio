"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const TECH_STACK = [
  "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS",
  "Flutter", "Dart", "PHP", "Laravel", "PostgreSQL", 
  "Firebase", "Python", "Java", "MongoDB", 
  "Git", "Node.js", "Prisma", "HTML", "CSS"
]

const CHIPS_COUNT = 5
const TECHS_PER_CHIP = 4

const ICON_MAP: Record<string, string> = {
  "next.js": "nextjs",
  "tailwind css": "tailwindcss",
  "typescript": "typescript",
  "postgresql": "postgresql",
  "javascript": "javascript",
  "prisma": "prisma",
  "flutter": "flutter",
  "firebase": "firebase",
  "react.js": "react",
  "react": "react",
  "laravel": "laravel",
  "php": "php",
  "node.js": "nodejs",
  "discord.js": "discordjs",
  "bladetemplate": "laravel",
  "python": "python",
  "java": "java",
  "mongodb": "mongodb",
  "dart": "dart",
  "html": "html5",
  "css": "css3",
}

export function RotatingTechStack() {
  const [chipGroups, setChipGroups] = useState<string[][]>([]);

  useEffect(() => {
    const shuffled = [...TECH_STACK].sort(() => 0.5 - Math.random());
    const groups: string[][] = [];
    for (let i = 0; i < CHIPS_COUNT; i++) {
      const slice = shuffled.slice(i * TECHS_PER_CHIP, (i + 1) * TECHS_PER_CHIP);
      groups.push(slice);
    }
    setChipGroups(groups);
  }, []);

  if (chipGroups.length < 5) return null;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap md:justify-start gap-2">
        {chipGroups.slice(0, 3).map((group, i) => (
          <Chip key={`top-${i}`} techGroup={group} />
        ))}

        <div className="hidden md:block">
          <Chip key="top-3" techGroup={chipGroups[3]} />
        </div>
      </div>

      <div className="flex flex-wrap md:justify-start gap-2">
        <div className="block md:hidden">
          <Chip key="bottom-3" techGroup={chipGroups[3]} />
        </div>
        <div className="block md:hidden">
          <Chip key="bottom-4" techGroup={chipGroups[4]} />
        </div>

        <div className="hidden md:block">
          <Chip key="bottom-4-desktop" techGroup={chipGroups[4]} />
        </div>
      </div>
    </div>
  );
}

function Chip({ techGroup }: { techGroup: string[] }) {
  const [current, setCurrent] = useState(techGroup[0])
  const [isAnimating, setIsAnimating] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const firstIterationRef = useRef(true);

  useEffect(() => {

    const scheduleNext = () => {
      const delay = firstIterationRef.current
        ? Math.random() * 3000 + 1000 // 1–4 detik
        : Math.random() * 4000 + 4000; // 4–8 detik

      timerRef.current = setTimeout(() => {
        let next = current;
        while (next === current) {
          next = techGroup[Math.floor(Math.random() * techGroup.length)];
        }

        setIsAnimating(true);
        setTimeout(() => {
          setCurrent(next);
          setIsAnimating(false);
        }, 300);

        firstIterationRef.current = false;
        scheduleNext();
      }, delay);
    };

    scheduleNext();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, techGroup]);


  const iconKey = ICON_MAP[current.toLowerCase()] || current.toLowerCase()
  const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconKey}/${iconKey}-original.svg`

  return (
    <motion.div
      className="will-change-transform my-auto flex items-center gap-2 px-2.5 md:px-3 py-1.5 bg-primary/5 text-primary 
        text-xs md:text-sm rounded-full shadow-sm 
        shadow-primary/20 border-primary/10 font-medium select-none"
      style={{ transformOrigin: "center", perspective: 600 }}
      animate={{
        rotateX: isAnimating ? 180 : 0,
        scale: isAnimating ? 0.95 : 1,
        filter: isAnimating ? "blur(1px)" : "blur(0px)",
        width: "auto",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      >
      <img src={iconUrl} alt={current} className="w-4 h-4 object-contain" />

      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          layout
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  )
}
