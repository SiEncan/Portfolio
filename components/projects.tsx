"use client"

import Link from "next/link"
import { projects } from "@/lib/projects-data"

export function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-md md:text-lg text-foreground/70 max-w-2xl">
            A selection of projects I've worked on, showcasing my skills in full-stack development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors"
            >
              <span className="absolute bottom-3 right-3 bg-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded z-10">
                {project.year}
              </span>

              <div className="relative overflow-hidden bg-muted h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover ${
                    project.title === "T-Cash" ? "object-[0_30%]" : ""
                  } group-hover:scale-105 transition-transform duration-300`}
                />
              </div>

              <div className="p-6 space-y-4">
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
          ))}
        </div>
      </div>
    </section>
  )
}
