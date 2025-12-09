"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const router = useRouter()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 30%, rgba(220, 38, 38, 0.2) 0%, transparent 50%)",
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(circle at 70% 70%, rgba(153, 27, 27, 0.15) 0%, transparent 50%)",
          transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img
              src="/perfumeria-pena-logo.png"
              alt="Perfumería Peña"
              className="w-40 h-40 object-contain animate-pulse-subtle"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-balance leading-tight">
            Esencias Puras,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700">
              Aromas Únicos
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Descubre nuestra colección exclusiva de decants de perfumes premium. Cada frasco contiene la esencia pura de
            lujo y sofisticación.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Removed "Explorar Colección" button */}
            <button
              onClick={() => router.push("/catalog")}
              className="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all font-medium"
            >
              Ver Catálogo
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-8 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes pulseSubtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-subtle {
          animation: pulseSubtle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
