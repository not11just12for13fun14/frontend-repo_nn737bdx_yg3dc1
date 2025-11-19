import { ShoppingCart, Search, Menu } from 'lucide-react'

function Navbar({ onSearch }) {
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white"><Menu size={20} /></button>
          <div className="flex items-center gap-2">
            <img src="/flame-icon.svg" alt="logo" className="w-7 h-7" />
            <span className="text-white font-semibold tracking-tight">BlueSport</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 w-[40%]">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
            <input
              type="text"
              placeholder="Search shoes, balls, rackets..."
              className="w-full bg-white/10 text-white placeholder-white/60 pl-10 pr-4 py-2 rounded-xl outline-none border border-white/10 focus:border-blue-400/60"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#catalog" className="hidden sm:inline-flex text-white/80 hover:text-white">Catalog</a>
          <a href="#brands" className="hidden sm:inline-flex text-white/80 hover:text-white">Brands</a>
          <button className="relative p-2 rounded-lg hover:bg-white/10 text-white">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 text-[10px] bg-blue-500 text-white rounded-full px-1.5 py-0.5">0</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
