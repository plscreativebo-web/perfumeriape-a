"use client"

interface HeaderProps {
  scrolled: boolean
}

export default function Header({ scrolled }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/perfumeria-pena-logo.png" alt="Perfumería Peña Logo" className="w-12 h-12 object-contain" />
          <span className="text-xl font-serif font-bold">PERFUMERÍA PEÑA</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm hover:text-accent transition-colors">
            Inicio
          </a>
          <a href="#featured" className="text-sm hover:text-accent transition-colors">
            Destacados
          </a>
        </nav>
      </div>
    </header>
  )
}
