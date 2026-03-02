'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(json => setServices(json))
      .catch(err => console.error("Error fetching services:", err))
  }, [])

  const handlePaypal = (amount) => {
    // FIXED LINK LOGIC
    window.open(`https://www.paypal.com{amount}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <nav className="flex justify-between items-center mb-24">
          <div className="text-3xl font-black tracking-tighter text-white">Kimpuler<span className="text-purple-500"> Design</span></div>
          <div className="flex gap-6 items-center">
            <span className="hidden md:inline text-xs text-slate-500 font-mono italic">STATUS: OPEN FOR PROJECTS</span>
            <a 
              href="https://wa.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-xs font-bold hover:bg-white/10 transition"
            >
              WHATSAPP
            </a>
          </div>
        </nav>

        <header className="max-w-4xl mb-32">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8 tracking-tight">
            Next-Gen <br/>Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Architect.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Full-Stack Solutions: Web Development, DBA, Crypto Solutions, and Professional Live Commerce Hosting.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group p-8 bg-slate-900/40 border border-white/5 rounded-3xl hover:border-purple-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-purple-500 mb-4 uppercase tracking-widest">Service 0{i+1}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{s.desc}</p>
              </div>
              
              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-black text-white">${s.price}</span>
                  <span className="text-slate-500 text-xs uppercase">USD</span>
                </div>
                <button 
                  onClick={() => handlePaypal(s.paypal_val)}
                  className="w-full py-4 bg-purple-600 text-white rounded-2xl font-bold hover:bg-purple-500 shadow-lg shadow-purple-900/20 transition-all transform active:scale-95"
                >
                  Order & Pay via PayPal
                </button>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-40 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-mono">
          <p>© 2026 KIMPULER.COM — BASED IN INDONESIA, SERVING GLOBALLY</p>
          <div className="flex gap-8">
            {/* <a href="https://github.com" target="_blank" className="hover:text-white transition font-bold">GITHUB</a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-white transition font-bold">LINKEDIN</a>
            <a href="https://upwork.com" target="_blank" className="hover:text-white transition font-bold text-emerald-400">UPWORK</a>*/}
          </div> 
        </footer>
      </div>
    </div>
  )
}
