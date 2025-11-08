import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects-data"
import { ProjectGallery } from "@/components/project-gallery"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === Number.parseInt(id))

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === Number.parseInt(id))

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 shadow-md rounded-lg m-6 bg-white">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Project Title Section */}
        <div className="mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{project.title}</h1>
          <p className="text-lg text-foreground/70">{project.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/80 text-primary-foreground rounded-lg hover:bg-primary transition-colors text-sm"
            >
              <ExternalLink size={16} />
              View Live
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm"
            >
              <Github size={16} />
              View Code
            </a>
          )}
        </div>

        {/* Featured Image */}
        <div className={`mb-12 rounded-lg overflow-hidden bg-muted ${
          project.title.includes('T-Cash') ? 'max-w-xs mx-auto' : project.title.includes('Prambors') ? 'max-w-lg mx-auto' : ''}`}>
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-auto" />
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-8 text-sm text-foreground/60 mb-12 pb-12 border-b border-border">
          <div>
            <span className="font-semibold text-foreground block mb-1">Year</span>
            {project.year}
          </div>
          <div>
            <span className="font-semibold text-foreground block mb-1">Role</span>
            {project.role}
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-12 border-b pb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">✨ Description</h2>
          <p className="whitespace-pre-line text-foreground/80 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: project.longDescription }}/>
        </div>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">⚙️ Key Features</h2>
            <ul className={`space-y-1.5 ${ project.keyFeatures.length > 4 ? "columns-2 md:columns-2" : "columns-1"}`}
            >
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="break-inside-avoid flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Additional Info Table */}
        {project.additionalList && project.additionalList.length > 0 && (
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-700 font-semibold">Label</th>
                  <th className="px-4 py-2 text-left text-gray-700 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {project.additionalList.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-2 font-mono text-gray-900">{item.label}</td>
                    <td className="px-4 py-2 text-gray-700">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* What i Built */}
        {project.whatIBuilt && project.keyFeatures.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">🔧 What I Built</h2>
            <ul className="columns-1 md:columns-2 space-y-1">
              {project.whatIBuilt.map((built, index) => (
                <li key={index} className="break-inside-avoid flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-foreground/80" dangerouslySetInnerHTML={{ __html: built }}/>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* What i Learned */}
        {project.whatILearned && project.keyFeatures.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">🧠 What I Learned</h2>
            <p className="mb-3 font-medium">Through building {project.title}, I gained practical experience in:</p>
            <ul className="columns-1 space-y-0.75">
              {project.whatILearned.map((learned, index) => (
                <li key={index} className="break-inside-avoid flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-foreground/80" dangerouslySetInnerHTML={{ __html: learned }}/>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Goals */}
        {project.goals && project.keyFeatures.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">🧩 Project Goals</h2>
            <p className="mb-3 font-medium">This project was created primarily for learning purposes, focusing on:</p>
            <ul className="columns-1 space-y-1">
              {project.goals.map((goal, index) => (
                <li key={index} className="break-inside-avoid flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-foreground/80" dangerouslySetInnerHTML={{ __html: goal }}/>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Section */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-12 pb-12 border-b-2 border-gray-200">
            <h2 className="text-2xl font-bold text-foreground mb-4">🧰 Tech Stack</h2>
            <div className="flex flex-wrap gap-4 items-center">
              {project.techStack.map((tech, index) => {
                const techName = tech.toLowerCase().replace(/\s+/g, "")
                const iconMap: Record<string, string> = {
                  "next.js": "nextjs",
                  "tailwindcss": "tailwindcss",
                  "typescript": "typescript",
                  "postgresql": "postgresql",
                  "javascript": "javascript",
                  "prisma": "prisma",
                  "flutter": "flutter",
                  "firebase": "firebase",
                  "react": "react",
                  "laravel": "laravel",
                  "php": "php",
                  "mysql": "mysql",
                  "node.js": "nodejs",
                  "discord.js": "discordjs",
                  "bladetemplate": "laravel",
                }

                const iconKey = iconMap[techName] || techName
                const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconKey}/${iconKey}-original.svg`

                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 border border-border px-3 py-1.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition"
                  >
                    <img
                      src={iconUrl}
                      alt={tech}
                      className="w-5 h-5 object-contain"
                    />
                    <span className="text-sm text-foreground font-medium">{tech}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Gallery Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">📸 Gallery</h2>
            <p className="text-foreground/70">Click on any image or video to view in full screen</p>
          </div>
          <ProjectGallery items={project.gallery} title={project.title} />
        </div>
      </div>

      <Footer />
    </main>
  )
}
