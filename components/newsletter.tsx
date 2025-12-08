"use client"

import type React from "react"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail("")
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <section
      id="newsletter"
      className="py-20 bg-gradient-to-r from-amber-900/20 via-orange-900/10 to-amber-900/20 border-y border-border/20"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Suscribirse a Novedades</h2>
        <p className="text-muted-foreground mb-8">Recibe información sobre nuevos lanzamientos y ofertas exclusivas</p>

        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto flex-col sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
            className="flex-1 px-4 py-3 rounded-lg bg-card border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium whitespace-nowrap hover:shadow-lg"
          >
            Suscribirse
          </button>
        </form>

        {subscribed && (
          <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-600 font-medium animate-in fade-in-50 duration-300">
            ✓ ¡Gracias por suscribirte!
          </div>
        )}
      </div>
    </section>
  )
}
