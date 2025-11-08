export function Hero() {
  return (
    <section className="bg-gradient-to-tr from-background via-background to-accent/30 relative overflow-hidden">

      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
                Software{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Engineer</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl text-balance leading-relaxed">
                Passionate and detail-oriented developer with hands-on experience in designing and building real-world
                applications. I enjoy creating efficient systems and intuitive digital experiences through thoughtful
                problem-solving and clean design.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium hover:shadow-lg hover:shadow-primary/20"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-medium"
              >
                Get in Touch
              </a>
            </div>

            <div className="pt-8 space-y-3">
              <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/5 text-primary text-sm rounded-full border border-primary/10 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-96 lg:h-full min-h-96 lg:min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/10 shadow-2xl shadow-primary/40 rounded-3xl" />

            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img src="/profile.png" alt="Profile" className="w-full h-full object-cover mt-5" />

              <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-transparent" />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
