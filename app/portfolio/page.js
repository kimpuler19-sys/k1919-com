// app/portfolio/page.js
'use client'

import Link from 'next/link'

const caseStudies = [ ... ] // data tetap sama

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <nav className="flex justify-between items-center mb-16 border-b border-white/5 pb-8 font-mono">
          <Link href="/" className="text-3xl font-black tracking-tighter text-white uppercase italic underline decoration-purple-500 decoration-4 underline-offset-8">KIMPULER</Link>
          <Link href="/" className="text-white/60 hover:text-white transition text-sm">← Back to Home</Link>
        </nav>

        <header className="mb-16">
          <h1 className="text-5xl font-black text-white mb-6">Case Studies & Success Stories</h1>
          <p className="text-xl text-slate-400 max-w-3xl">Real projects with measurable results. Each case represents a partnership focused on solving complex challenges.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">{cs.year}</span>
                <span className="text-xs text-slate-500">Client: {cs.client}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{cs.title}</h3>
              <div className="mb-4">
                <p className="text-slate-400 text-sm"><span className="text-purple-400 font-semibold">Problem:</span> {cs.problem}</p>
              </div>
              <div className="mb-4">
                <p className="text-slate-400 text-sm"><span className="text-purple-400 font-semibold">Solution:</span> {cs.solution}</p>
              </div>
              <div className="mb-4">
                <p className="text-emerald-400 text-sm font-semibold"><span className="text-purple-400">Result:</span> {cs.result}</p>
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tech.map((tech, idx) => (
                    <span key={idx} className="text-[10px] bg-white/10 px-2 py-1 rounded-full text-slate-300">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Have a similar challenge?</h2>
          <a href="https://wa.me/6283841632837" target="_blank" className="inline-block bg-purple-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-purple-500 transition shadow-xl">
            Let's Create Your Success Story
          </a>
        </div>
      </div>
    </div>
  )
}