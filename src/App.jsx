import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Catalog from './components/Catalog'

function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar onSearch={setQuery} />
      <Hero />
      <Features />
      <Catalog query={query} />

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/60 text-sm">© {new Date().getFullYear()} BlueSport. All rights reserved.</div>
          <div className="text-white/60 text-sm">Built with performance in mind.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
