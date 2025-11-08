"use client"

import type React from "react"

import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Let's Connect</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Have a project in mind or want to collaborate? I'd love to hear from you. Get in touch and let's create
            something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Email</h3>
              <a href="mailto:adnanalvitomustaqim@gmail.com" className="text-foreground/70 hover:text-foreground transition-colors">
                adnanalvitomustaqim@gmail.com
              </a>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Social</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/adnanalvito_/" className="text-foreground/70 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/adnan-alvito-mustaqim-20929335a/" className="text-foreground/70 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a href="https://github.com/SiEncan" className="text-foreground/70 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Availability</h3>
              <p className="text-foreground/70">
                Available for freelance projects and full-time opportunities. Let's discuss how I can help bring your
                ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
