"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-foreground">Portfolio</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
