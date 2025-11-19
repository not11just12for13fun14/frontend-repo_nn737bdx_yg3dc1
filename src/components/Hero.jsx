import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[70vh] md:min-h-[80vh]">
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-blue-300/80 text-xs mb-3">Automotive • Sports • Dynamic</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Gear built for speed, performance and winning
          </h1>
          <p className="mt-4 text-blue-100/90 text-lg">
            Shop pro-grade equipment and apparel engineered for athletes. From the track to the court, perform at your best.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#catalog" className="px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition">Shop bestsellers</a>
            <a href="#brands" className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition">Explore brands</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
