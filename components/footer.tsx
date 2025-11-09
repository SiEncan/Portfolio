export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
          <div className="text-foreground/70 text-xs md:text-sm">© Adnan Alvito Mustaqim {currentYear}. All rights reserved.</div>
      </div>
    </footer>
  )
}
