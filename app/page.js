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
    // Manual concatenation for 100% accuracy
    const baseUrl = "https://paypal.me/kimpuler/";
    const finalUrl = baseUrl + amount;
    window.open(finalUrl, '_blank');
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30">
      {/* Dynamic Background Mesh */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center mb-24 border-b border-white/5 pb-8">
          <div className="text-3xl font-black tracking-tighter text-white">KIMPULER<span className="text-purple-500 underline decoration-2 underline-offset-4"> DESIGN</span></div>
          <div className="flex gap-6 items-center">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] text-purple-500 font-mono font-bold animate-pulse uppercase tracking-[0.2em]">● Online & Ready</span>
              <span className="text-[10px] text-slate-500 font-mono">Expert Remote Worker</span>
            </div>
            <a 
              href="https://wa.me/6283841632837" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-5 py-2 rounded-full text-xs font-black hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              HIRE VIA WHATSAPP
            </a>
          </div>
        </nav>

        {/* Hero Section with SEO Keywords */}
        <header className="max-w-5xl mb-32">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            E-COMMERCE <br/>& WEB <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">AUTHORITY.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
            Providing high-end **Full-Stack Development**, specialized **PHP Engineering**, **Database Administration (DBA)**, and **Solana Blockchain** solutions for global businesses.
          </p>
        </header>

        {/* Service Feature Points (SEO Boost) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
          <div className="border-l border-purple-500 pl-4">✓ Scalable PHP Apps</div>
          <div className="border-l border-purple-500 pl-4">✓ SQL Query Tuning</div>
          <div className="border-l border-purple-500 pl-4">✓ Smart Contracts</div>
          <div className="border-l border-purple-500 pl-4">✓ High-Conversion Live</div>
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-10 bg-slate-900/30 backdrop-blur-xl border border-white/5 rounded-[2rem] hover:border-purple-500/50 transition-all duration-500 flex flex-col">
              <div className="mb-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-xs font-mono text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full uppercase tracking-tighter">Premium Service</div>
                  <span className="text-slate-700 font-black text-4xl">0{i+1}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-loose opacity-80">{s.desc}</p>
              </div>
              
              <div className="mt-auto pt-8 border-t border-white/5">
                <div className="flex flex-col mb-6">
                  <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Investment</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white tracking-tighter">${s.price}</span>
                    <span className="text-purple-500 text-sm font-bold font-mono">USD</span>
                  </div>
                </div>
                <button 
                  onClick={() => handlePaypal(s.paypal_val)}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.5)] transition-all active:scale-95"
                >
                  Confirm & Pay Securely
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Expertise Section */}
        <section className="mt-32 p-12 bg-gradient-to-b from-slate-900/50 to-transparent rounded-[3rem] border border-white/5">
           <h2 className="text-3xl font-black text-white mb-12 uppercase tracking-tighter text-center">Why Partner with Kimpuler?</h2>
           <div className="grid md:grid-cols-3 gap-12 text-sm text-slate-400 leading-relaxed">
              <div className="space-y-4">
                 <h4 className="text-white font-bold uppercase tracking-widest text-xs">● DBA & Backend Mastery</h4>
                 <p>Specialized in PHP, Laravel, and complex MySQL/PostgreSQL architecture. We don't just build; we optimize for millions of records with 100% data integrity.</p>
              </div>
              <div className="space-y-4">
                 <h4 className="text-white font-bold uppercase tracking-widest text-xs">● Blockchain & Crypto</h4>
                 <p>Deploying production-ready Solana programs (Rust/Anchor). From custom tokenomics to decentralized landing pages with 3-months dedicated support.</p>
              </div>
              <div className="space-y-4">
                 <h4 className="text-white font-bold uppercase tracking-widest text-xs">● Live Commerce Growth</h4>
                 <p>Integrating technology with sales. Professional live hosting sessions for TikTok and Shopee designed to convert viewers into loyal customers.</p>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="mt-40 py-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-slate-500 text-[10px] font-mono">
          <div className="text-center md:text-left">
            <p className="font-bold text-slate-400 mb-1 tracking-widest">KIMPULER DESIGN STUDIO</p>
            <p>© 2026 GLOBAL REMOTE OPERATIONS — OPERATING FROM INDONESIA</p>
          </div>
          <div className="flex gap-8 border border-white/10 px-8 py-4 rounded-full">
            {/* <a href="https://github.com" target="_blank" className="hover:text-purple-400 transition-colors uppercase font-black tracking-widest">Github</a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-purple-400 transition-colors uppercase font-black tracking-widest">LinkedIn</a>
            <a href="https://upwork.com" target="_blank" className="hover:text-emerald-400 transition-colors uppercase font-black tracking-widest">Upwork</a> */}
          </div>
        </footer>
      </div>
    </div>
  )
}
