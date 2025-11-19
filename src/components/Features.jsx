import { ShieldCheck, Truck, Star, RefreshCw } from 'lucide-react'

function Features() {
  const items = [
    { icon: Truck, title: 'Fast shipping', desc: '2-day delivery on most items' },
    { icon: ShieldCheck, title: 'Secure checkout', desc: 'Encrypted payments and buyer protection' },
    { icon: Star, title: 'Pro quality', desc: 'Curated gear used by athletes' },
    { icon: RefreshCw, title: 'Easy returns', desc: '30-day returns with no hassle' },
  ]

  return (
    <section className="relative py-14 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90">
              <Icon className="text-blue-400 mb-2" size={22} />
              <div className="font-semibold">{title}</div>
              <div className="text-sm text-white/70">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
