import { useEffect, useState } from 'react'

function Catalog({ query }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const qs = query ? `?q=${encodeURIComponent(query)}` : ''
        const res = await fetch(`${base}/api/products${qs}`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [query])

  return (
    <section id="catalog" className="relative py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Bestsellers</h2>
          <a href="#" className="text-blue-400 hover:text-blue-300">View all</a>
        </div>

        {loading ? (
          <div className="text-white/70">Loading products...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <div key={p.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                {p.image && (
                  <img src={p.image} alt={p.title} className="h-56 w-full object-cover" />
                )}
                <div className="p-4">
                  <div className="text-white font-semibold group-hover:text-blue-300 transition">{p.title}</div>
                  <div className="text-white/70 text-sm mb-2">{p.brand} • {p.sport}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-blue-400 font-bold text-lg">${p.price.toFixed(2)}</div>
                    <button className="px-3 py-1.5 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Catalog
