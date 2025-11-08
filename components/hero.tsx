"use client"
import { motion } from "framer-motion"
import { RotatingTechStack } from "./rotating-tech-stack"

export function Hero() {
  return (
    <section className="bg-gradient-to-tr from-background via-background to-accent/30 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full hidden md:block blur-3xl z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full hidden md:block blur-3xl z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-32">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          <div className="col-span-2 lg:col-span-1 order-2 lg:order-1 space-y-6">
            <div className="grid grid-cols-2 gap-4 items-center lg:block">
              <div>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-primary uppercase tracking-widest mb-2">
                  Adnan Alvito Mustaqim
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                <motion.span
                  className="inline-block bg-clip-text text-transparent bg-[linear-gradient(110deg,#000_0%,#555_20%,#000_40%)] bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ["200% 0%", "-200% 0%"],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Software{" "}
                </motion.span>

                <span className="relative inline-block bg-gradient-to-r from-primary to-accent/60 bg-clip-text text-transparent">
                  Engineer
                  <motion.span
                    className="absolute inset-0 bg-clip-text text-transparent bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.5)_50%,transparent_100%)]"
                    style={{
                      backgroundSize: "300% 100%",
                    }}
                    animate={{
                      backgroundPosition: ["200% 0%", "-200% 0%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    Engineer
                  </motion.span>
                </span>
              </h1>
              </div>

              <div className="relative w-full aspect-square rounded-2xl overflow-hidden lg:hidden shadow-2xl shadow-primary/40">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/10" />
                <div className="absolute inset-0 overflow-hidden">
                  <img src="/profile.png" alt="Profile" className="w-full h-full object-contain" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-transparent" />
              </div>
            </div>

            <p className="text-sm sm:text-md md:text-xl text-foreground/70 max-w-2xl text-balance leading-relaxed">
              Passionate and detail-oriented developer with hands-on experience in designing and building real-world
              applications. I enjoy creating efficient systems and intuitive digital experiences through thoughtful
              problem-solving and clean design.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium hover:shadow-lg hover:shadow-primary/20"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="text-sm md:text-base px-3 md:px-6 py-2 md:py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-medium"
              >
                Get in Touch
              </a>
            </div>

            <div className="space-y-2 pt-4">
              <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">Tech Stack</p>
              <RotatingTechStack />
            </div>
          </div>

          <div className="hidden lg:block order-1 lg:order-2 relative h-full min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/10 shadow-2xl shadow-primary/40 rounded-3xl" />
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
