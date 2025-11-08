"use client"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const TECH_STACK = [
  "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS",
  "Flutter", "Dart", "PHP", "Laravel", "PostgreSQL", "MySQL", "Firebase",
  "Python", "Java", "MongoDB",
]

const CHIPS_COUNT = 5
const TECHS_PER_CHIP = 3

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
  "mysql": "mysql",
  "node.js": "nodejs",
  "discord.js": "discordjs",
  "bladetemplate": "laravel",
  "python": "python",
  "java": "java",
  "mongodb": "mongodb",
  "dart": "dart",
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

  useEffect(() => {
    const scheduleNext = () => {
      const delay = Math.random() * 4000 + 4000
      timerRef.current = setTimeout(() => {
        let next = current
        while (next === current) {
          next = techGroup[Math.floor(Math.random() * techGroup.length)]
        }

        setIsAnimating(true)
        setTimeout(() => {
          setCurrent(next)
          setIsAnimating(false)
        }, 300)

        scheduleNext()
      }, delay)
    }

    scheduleNext()
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [current, techGroup])

  const iconKey = ICON_MAP[current.toLowerCase()] || current.toLowerCase()
  const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconKey}/${iconKey}-original.svg`

  return (
    <motion.div
      className="my-auto flex items-center gap-2 px-2 md:px-3 py-1 bg-primary/5 text-primary text-xs md:text-sm rounded-full border border-primary/10 font-medium select-none"
      animate={{
        rotateX: isAnimating ? 180 : 0,
        scale: isAnimating ? 0.9 : 1,
        filter: isAnimating ? "blur(1px)" : "blur(0px)",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ transformOrigin: "center", perspective: 600 }}
    >
      <img src={iconUrl} alt={current} className="w-3.5 md:w-4 h-3.5 md:h-4 object-contain" />
      <span>{current}</span>
    </motion.div>
  )
}
