"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import type { ProjectGalleryItem } from "@/lib/projects-data"

interface ProjectGalleryProps {
  items: ProjectGalleryItem[]
  title: string
}

export function ProjectGallery({ items, title }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const [isLoading, setIsLoading] = useState(true);

  const featuredItems = items.slice(0, 3)
  const additionalItems = items.slice(3)

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + items.length) % items.length))
  }

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % items.length))
  }

  useEffect(() => {
    if (selectedIndex !== null && items[selectedIndex].type === "image") {
      setIsLoading(true);
    }
  }, [selectedIndex]);


  return (
    <>
      {/* Featured Gallery Grid - Top 3 items in full view */}
      <div
        className={`grid gap-4 ${
          title.includes("T-Cash")
            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-5xl"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {featuredItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="relative overflow-hidden rounded-lg bg-muted group cursor-pointer"
          >
            {item.type === "image" ? (
              <img
                src={
                  item.src.endsWith(".gif")
                    ? item.src.replace(".gif", "-thumbnail.png")
                    : item.src || "/placeholder.svg"
                }
                alt={item.alt || `Gallery item ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {item.type === "video" ? "▶" : "🔍"}
              </div>
            </div>
            {item.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="text-white text-sm font-medium">{item.title}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Additional items as compact list */}
      {additionalItems.length > 0 && (
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-foreground mb-4">More Media</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {additionalItems.map((item, index) => (
              <button
                key={index + 3}
                onClick={() => setSelectedIndex(index + 3)}
                className="relative overflow-hidden rounded-lg bg-muted aspect-square group cursor-pointer"
              >
                {item.type === "image" ? (
                  <img
                    src={
                      item.src.endsWith(".gif")
                        ? item.src.replace(".gif", "-thumbnail.png")
                        : item.src || "/placeholder.svg"
                    }
                    alt={item.alt || `Gallery item ${index + 4}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg">
                    {item.type === "video" ? "▶" : "🔍"}
                  </div>
                </div>
                {item.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-50 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-white text-xs font-medium">{item.title}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 cursor-pointer right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>

          <button onClick={goToPrevious} className="cursor-pointer absolute left-4 text-white hover:text-gray-300 transition-colors">
            <ChevronLeft size={32} />
          </button>

          <div className={`w-full ${title.includes('T-Cash') ? 'max-w-lg mx-auto' : 'max-w-[95vw] md:max-w-[90vw] lg:max-w-[80vw]'}`}>
            <div className="relative w-full flex items-center justify-center">
              {items[selectedIndex].type === "image" ? (
                <>
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                      <div className="animate-spin rounded-full h-10 w-10 border-4 border-white border-t-transparent"></div>
                    </div>
                  )}
                  <img
                    src={items[selectedIndex].src}
                    alt={items[selectedIndex].alt}
                    onLoad={() => setIsLoading(false)}
                    className={`w-full h-auto rounded-lg transition-opacity duration-300 ${
                      isLoading ? "opacity-0" : "opacity-100"
                    }`}
                  />
                </>
              ) : (
                <video
                  src={items[selectedIndex].src}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>

            {items[selectedIndex].title && (
              <p className="text-white text-center mt-4">{items[selectedIndex].title}</p>
            )}
          </div>


          <button onClick={goToNext} className="cursor-pointer absolute right-4 text-white hover:text-gray-300 transition-colors">
            <ChevronRight size={32} />
          </button>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
