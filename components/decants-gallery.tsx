"use client"

import { useState } from "react"

interface Decant {
  id: number
  name: string
  size: string
  intensity: number
  image: string
}

const decants: Decant[] = [
  { id: 1, name: "Lavender Dream", size: "5ml", intensity: 6, image: "🟣" },
  { id: 2, name: "Ocean Wave", size: "10ml", intensity: 7, image: "🔵" },
  { id: 3, name: "Spice Noir", size: "5ml", intensity: 8, image: "🟤" },
  { id: 4, name: "White Musk", size: "10ml", intensity: 5, image: "⚪" },
  { id: 5, name: "Golden Hour", size: "5ml", intensity: 7, image: "🟡" },
  { id: 6, name: "Deep Forest", size: "10ml", intensity: 9, image: "🟢" },
  { id: 7, name: "Floral Bliss", size: "5ml", intensity: 4, image: "🩷" },
  { id: 8, name: "Smoky Woods", size: "10ml", intensity: 8, image: "🫫" },
]

export default function DecantsGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const sizes = ["all", "5ml", "10ml"]
  const filteredDecants = filter === "all" ? decants : decants.filter((d) => d.size === filter)

  return (
    <section id="collection" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Galería Completa</h2>
          <p className="text-muted-foreground text-lg mb-8">Explora todos nuestros decants disponibles</p>

          {/* Filters */}
          <div className="flex gap-3 justify-center flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setFilter(size)}
                className={`px-6 py-2 rounded-full transition-all font-medium capitalize ${
                  filter === size
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card border border-border/30 hover:border-primary/50"
                }`}
              >
                {size === "all" ? "Todos" : size}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {filteredDecants.map((decant, index) => (
            <div
              key={decant.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(decant.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `slideInGrid 0.5s ease-out ${index * 0.05}s both`,
              }}
            >
              <div className="relative h-64 md:h-72 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-border/30 transition-all duration-300 hover:border-red-500/50 group-hover:shadow-xl group-hover:shadow-red-900/20">
                {/* Animated background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 space-y-4 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl filter group-hover:scale-110 transition-transform duration-300">
                    {decant.image}
                  </div>

                  {/* Hidden content on hover */}
                  <div
                    className={`text-center transition-all duration-300 ${
                      hoveredId === decant.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <h3 className="font-serif font-bold text-lg text-foreground mb-1">{decant.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{decant.size}</p>

                    <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mb-3">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full transition-all duration-300"
                        style={{ width: `${(decant.intensity / 10) * 100}%` }}
                      />
                    </div>

                    <button className="text-xs bg-primary text-primary-foreground px-4 py-1.5 rounded-full hover:bg-primary/90 transition-all font-medium">
                      Ver más
                    </button>
                  </div>

                  {/* Default display */}
                  <div
                    className={`text-center transition-all duration-300 ${
                      hoveredId === decant.id ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                    }`}
                  >
                    <h3 className="font-serif font-bold text-foreground">{decant.name}</h3>
                    <p className="text-sm text-muted-foreground">{decant.size}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInGrid {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}
