"use client"

import Link from "next/link"
import { projects } from "@/lib/projects-data"
import { motion } from "framer-motion"

export function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-8">
      <div className="space-y-12">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          >
          <h2 className="text-3xl md:text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-md md:text-lg text-foreground/70 max-w-2xl">
            A selection of projects I've worked on, showcasing my skills in full-stack development and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch px-2">
          
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative block h-full flex flex-col rounded-lg border border-white overflow-hidden shadow-lg hover:shadow-xl hover:border-gray-300 transition-all bg-background"
                >
                <span className="absolute bottom-3 right-3 bg-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded z-10">
                  {project.year}
                </span>

                <div className="relative overflow-hidden bg-muted h-48 shrink-0">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-full object-cover ${
                      project.title === "T-Cash" ? "object-[0_30%]" : ""
                    } group-hover:scale-105 transition-transform duration-300`}
                  />
                </div>

                <div className="p-6 space-y-4 bg-background">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-foreground/70 text-sm">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-foreground/70 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
