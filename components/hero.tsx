export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">Creative Developer & Designer</h1>
          <p className="text-xl text-foreground/70 max-w-2xl text-balance">
            I craft beautiful, functional digital experiences. Specializing in modern web development with a focus on
            user experience and clean code.
          </p>
        </div>

        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
