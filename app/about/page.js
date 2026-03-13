// app/about/page.js
'use client'

import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30">
      {/* Background sama */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header sederhana dengan link ke home */}
        <nav className="flex justify-between items-center mb-16 border-b border-white/5 pb-8 font-mono">
          <Link href="/" className="text-3xl font-black tracking-tighter text-white uppercase italic underline decoration-purple-500 decoration-4 underline-offset-8">KIMPULER</Link>
          <Link href="/" className="text-white/60 hover:text-white transition text-sm">← Back to Home</Link>
        </nav>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-5xl font-black text-white mb-8">About Me & My Mission</h1>
          
          <p className="text-slate-300 leading-relaxed">
            I'm not just a freelancer; I'm a technical partner dedicated to helping businesses thrive in the digital age. 
            With over a decade of experience spanning from PHP ecosystems to modern Jamstack and blockchain, I've learned 
            that the best solutions come from deep collaboration and a genuine investment in your success.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-4">My Journey</h2>
          <p className="text-slate-300">
            I started as a freelance developer on platforms like Fiverr and Upwork, delivering quality code for clients worldwide. 
            Over time, I realized that the most impactful work comes from long-term partnerships, not one-off transactions. 
            That's why I transitioned to direct projects, focusing on becoming an integral part of my clients' teams—understanding 
            their business goals, challenges, and growth trajectories.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-4">What I Believe</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li><span className="text-purple-400 font-bold">Technology should serve business:</span> I don't just code; I architect solutions that drive real results.</li>
            <li><span className="text-purple-400 font-bold">Partnership over project:</span> I'm here for the long haul, providing ongoing support and strategic advice.</li>
            <li><span className="text-purple-400 font-bold">Quality and security are non-negotiable:</span> Every line of code is crafted with care and best practices.</li>
            <li><span className="text-purple-400 font-bold">Stay ahead of the curve:</span> I continuously explore emerging tech—like AI integration and blockchain—to keep your business competitive.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-12 mb-4">Beyond Code</h2>
          <p className="text-slate-300">
            When I'm not architecting systems or optimizing databases, I'm an avid learner, a mentor to aspiring developers, 
            and a believer in the power of clear communication. I'm based remotely, collaborating with clients across time zones 
            to bring ideas to life.
          </p>

          <div className="mt-16 p-8 bg-purple-900/20 rounded-3xl border border-purple-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to start a conversation?</h3>
            <p className="text-slate-300 mb-6">Let's discuss how I can help you achieve your goals.</p>
            <a href="https://wa.me/6283841632837" target="_blank" className="inline-block bg-purple-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-purple-500 transition shadow-xl">
              Let's Talk
            </a>
          </div>
        </article>
      </div>
    </div>
  )
}