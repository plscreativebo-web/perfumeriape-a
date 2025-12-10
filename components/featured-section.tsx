"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface Product {
  id: number
  name: string
  category: string
  concentration: string
  prices: { size: string; price: number }[]
  description: string
  notes: string[]
  image?: string
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "LE MALE ELIXIR",
    category: "Jean Paul Gaultier",
    concentration: "Eau de Parfum",
    prices: [
      { size: "5ml", price: 100 },
      { size: "10ml", price: 200 },
    ],
    description:
      "Una fragancia intensa y cautivadora que combina la profundidad del oud con la calidez del ámbar y la dulzura envolvente de la vainilla. Su aroma misterioso envuelve con una sensualidad oscura y elegante, perfecta para quienes buscan dejar una impresión inolvidable.",
    notes: ["LAVANDA", "MENTA", "MIEL", "VAINILLA"],
    image: "/images/image.png",
  },
  {
    id: 2,
    name: "MANDARIN SKY",
    category: "ARMAF ODYSSEY",
    concentration: "Eau de Toilette",
    prices: [
      { size: "5ml", price: 50 },
      { size: "10ml", price: 100 },
    ],
    description:
      "Armaf Odyssey Mandarin Sky es una fragancia moderna y vibrante que combina la frescura chispeante de los cítricos con el dulzor cálido y seductor del caramelo y la haba tonka, culminando en una base amaderada y elegante.",
    notes: ["MANDARINA", "NARANJA", "CARAMELO", "HABA TONKA"],
    image: "/images/Armaf.png",
  },
  {
    id: 3,
    name: "QAHWA",
    category: "Khamrah",
    concentration: "Eau de Parfum",
    prices: [
      { size: "5ml", price: 60 },
      { size: "10ml", price: 110 },
    ],
    description:
      "Una fragancia cálida y elegante, donde un ramo de rosas premium se fusiona con la suavidad de la peonía y el toque floral del jazmín. Su fondo de sándalo aporta un carácter cremoso y sofisticado, creando un aroma refinado y encantador.",
    notes: ["CAFÉ", "CANELA", "VAINILLA", "JENGIBRE"],
    image: "/images/khamrah-qahwa.png",
  },
  {
    id: 4,
    name: "YARA CANDY",
    category: "LATTAFA",
    concentration: "Eau de Parfum",
    prices: [
      { size: "5ml", price: 50 },
      { size: "10ml", price: 100 },
    ],
    description:
      "Lattafa Yara Candy es una fragancia femenina alegre, dulce y juvenil que evoca una explosión de golosinas y frescura desde el primer instante. Su apertura chispeante de mandarina verde y grosella negra aporta vitalidad y un toque frutal refrescante. Luego, emerge un corazón juguetón y encantador con la sensación de “caramelo de fresa” y notas florales suaves de gardenia, que recuerdan a dulces golosinas con un aire refinado. Finalmente, en su secado, la combinación de sándalo, vainilla, almizcle y ámbar deja una estela cálida, dulce-cremosa y envolvente, ideal para quienes buscan un perfume dulce, llamativo y femenino.",
    notes: ["MANDARINA VERDE", "GROSELLA NEGRA", "STRAWBERRY", "VAINILLA"],
    image: "/images/Yara.png",
  },
  {
    id: 5,
    name: "FOR HIM",
    category: "HAWAS",
    concentration: "Eau de Parfum",
    prices: [
      { size: "5ml", price: 50 },
      { size: "10ml", price: 100 },
    ],
    description:
      "Una fragancia fresca, masculina y adictiva que combina el toque chispeante de la manzana y los cítricos con un corazón acuático lleno de energía. Su mezcla de notas marinas, ciruela y cardamomo aporta un carácter moderno y dinámico, mientras que el fondo de ámbar gris, almizcle y maderas ambaradas deja una estela cálida, limpia y seductora. Ideal para el día a día, climas cálidos y hombres que buscan frescura con personalidad.",
    notes: ["MANZANA", "LIMÓN", "CANELA", "BERGAMOTA"],
    image: "/images/Hawas-for-Him-Rasasi.png",
  },
]

export default function FeaturedSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  return (
    <section id="featured" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nuestros Perfumes</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => {
                setSelectedProduct(product)
                setSelectedSize(null)
              }}
            >
              <div
                className="bg-card rounded-xl overflow-hidden border border-border/30 transition-all duration-500 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-900/20"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: "radial-gradient(circle at center, rgba(220, 38, 38, 0.3) 0%, transparent 70%)",
                    }}
                  />
                  {product.image ? (
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-contain p-4"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-40 bg-slate-700/40 rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center gap-2">
                        <p className="text-xs text-center font-semibold text-foreground/60">{product.concentration}</p>
                      </div>
                    </div>
                  )}
                  {hoveredId === product.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-100" />
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-red-500 mb-2 uppercase tracking-wider">
                      {product.category}
                    </p>
                    <h3 className="text-2xl font-serif font-bold mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.notes.map((note, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-red-900/40 text-red-300 rounded-full font-medium">
                        {note}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-end pt-4 border-t border-border/30">
                    <button
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-sm font-medium hover:shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProduct(product)
                        setSelectedSize(null)
                      }}
                    >
                      Pedir
                    </button>
                  </div>
                </div>
              </div>

              <style jsx>{`
                @keyframes slideUp {
                  from {
                    opacity: 0;
                    transform: translateY(40px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: "scaleIn 0.3s ease-out",
            }}
          >
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border/30 bg-card">
              <h2 className="text-2xl font-serif font-bold">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {selectedProduct.image && (
                <div className="flex justify-center">
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="w-48 h-64 object-contain"
                  />
                </div>
              )}

              <div className="space-y-2">
                <p className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                  {selectedProduct.category}
                </p>
                <p className="text-sm text-white font-semibold">{selectedProduct.name}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Descripción</h3>
                <p className="text-foreground leading-relaxed">{selectedProduct.description}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Notas Olfativas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.notes.map((note, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-red-900/40 text-red-300 rounded-full font-medium">
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-border/30">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Tamaño</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProduct.prices.map((priceOption) => (
                    <button
                      key={priceOption.size}
                      onClick={() => setSelectedSize(priceOption.size)}
                      className={`p-4 rounded-lg border-2 transition-all font-semibold ${
                        selectedSize === priceOption.size
                          ? "border-red-500 bg-red-900/30 text-red-300"
                          : "border-border/30 hover:border-red-500/50"
                      }`}
                    >
                      <div className="text-base">{priceOption.size}</div>
                      <div className="text-sm text-red-500">Bs.{priceOption.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-border/30">
                {selectedSize && (
                  <span className="text-3xl font-serif font-bold text-red-500">
                    Bs.{selectedProduct.prices.find((p) => p.size === selectedSize)?.price}
                  </span>
                )}
                <a
                  href="https://api.whatsapp.com/send?phone=59160967218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-sm font-medium hover:shadow-lg hover:scale-105"
                >
                  Pedir Ahora
                </a>
              </div>
            </div>

            <style jsx>{`
              @keyframes scaleIn {
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
          </div>
        </div>
      )}
    </section>
  )
}
