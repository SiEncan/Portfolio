export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-foreground/70 text-sm">© {currentYear} Portfolio. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
