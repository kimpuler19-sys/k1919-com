'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { blogPosts } from './blog/data'

export default function Home() {
  const [services, setServices] = useState([])
  const [selectedService, setSelectedService] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', desc: '', captcha: '' })
  const [captchaValue, setCaptchaValue] = useState(0)

  useEffect(() => {
    // Ambil data dari API
    fetch('/api/services')
      .then(res => res.json())
      .then(json => setServices(json))
      .catch(err => console.error(err))
    setCaptchaValue(Math.floor(Math.random() * 80) + 10)
  }, [])

  const handleAction = (s) => {
    if (s.original_price >= 1000) {
      const message = encodeURIComponent(`Hi, I'm interested in your package: ${s.title}. Let's discuss my project.`);
      window.open(`https://wa.me/6283841632837?text=${message}`, '_blank');
    } else {
      setSelectedService(s);
      setShowModal(true);
    }
  }

  const handlePayment = (e) => {
    e.preventDefault()
    if (parseInt(formData.captcha) !== captchaValue + 5) { alert("Security Check Failed!"); return }
    const paypalEmail = "jokonardi@gmail.com";
    const orderNote = `Order: ${selectedService.title} | Client: ${formData.name} | WA: ${formData.phone} | Email: ${formData.email} | Project: ${formData.desc}`;
    const baseUrl = "https://www.paypal.com/cgi-bin/webscr";
    const params = new URLSearchParams({
      cmd: "_xclick",
      business: paypalEmail,
      item_name: orderNote.substring(0, 120),
      amount: selectedService.paypal_val,
      currency_code: "USD",
    });
    window.open(`${baseUrl}?${params.toString()}`, '_blank')
    setShowModal(false)
  }

  // Data studi kasus statis
  const caseStudies = [
    {
      title: "E-commerce Speed Boost",
      problem: "Online store loading >5 seconds, high bounce rate",
      solution: "Full performance audit, image optimization, code splitting",
      result: "2.1s load time, 35% increase in conversions",
    },
    {
      title: "Solana DEX Integration",
      problem: "Needed custom SPL token swap with high security",
      solution: "Built Anchor program + React frontend",
      result: "Launched in 6 weeks, $2M TVL in first month",
    },
    {
      title: "AI Chatbot for Support",
      problem: "Customer support overwhelmed with repetitive queries",
      solution: "Custom chatbot using RAG on company docs",
      result: "70% reduction in support tickets, 24/7 availability",
    },
    {
      title: "ML-Powered Fraud Detection",
      problem: "Financial client needed real-time fraud detection",
      solution: "Built ensemble ML model with Python + deployed as API",
      result: "94% accuracy, $500K prevented losses in first quarter",
    },
  ]

  const getShortBenefit = (title) => {
    if (title.includes("AI & LLM")) return "Private AI trained on YOUR data, not generic models.";
    if (title.includes("Python Web")) return "Scalable, secure, and production-ready backend systems.";
    if (title.includes("Data Engineering")) return "Turn raw data into business-ready insights.";
    if (title.includes("Machine Learning")) return "Predict outcomes before they happen.";
    if (title.includes("Process Automation")) return "Save hundreds of hours on repetitive tasks.";
    if (title.includes("API Development")) return "Connect your entire software ecosystem seamlessly.";
    if (title.includes("Data Science")) return "Interactive dashboards that drive decisions.";
    if (title.includes("Performance Optimization")) return "Make your Python code 10x faster, cut cloud costs.";
    if (title.includes("Maintenance")) return "Sleep better at night – your site is always safe and fast.";
    if (title.includes("Speed")) return "Convert more visitors with lightning-fast pages.";
    if (title.includes("Full-Stack")) return "Get a scalable app built with modern tech, ready for growth.";
    if (title.includes("Low-Code")) return "Launch internal tools in weeks, not months.";
    if (title.includes("AI Feature")) return "Engage users with smart, personalized experiences.";
    if (title.includes("AIO")) return "Be found by ChatGPT and other AI search engines.";
    if (title.includes("Elite Web")) return "Sub-second loading, edge-deployed, future-proof.";
    if (title.includes("Developer Time")) return "Dedicated hours to tackle your most complex tasks.";
    if (title.includes("DBA")) return "Make your database bulletproof and blazing fast.";
    if (title.includes("Trial")) return "Test our skills risk-free on a small project.";
    if (title.includes("Retainer")) return "A true technical partner, always on your side.";
    if (title.includes("Solana")) return "Enterprise-grade blockchain solutions.";
    if (title.includes("Weekly PHP Maintenance")) return "Keep your PHP application fresh and secure with weekly dedicated hours.";
    if (title.includes("Custom PHP Dashboard")) return "Get a fully functional dashboard with server, backed by 1 year of support.";
    return "Tailored solution for your business needs.";
  }

  const calculateDiscountPercent = (original, current) => {
    if (!original || original <= current) return null;
    return Math.round(((original - current) / original) * 100);
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16 border-b border-white/5 pb-8 font-mono">
          <Link href="/" className="text-3xl font-black tracking-tighter text-white uppercase italic underline decoration-purple-500 decoration-4 underline-offset-8">KIMPULER</Link>
          <div className="flex gap-6 items-center">
            <Link href="/about" className="text-white/70 hover:text-white transition text-sm uppercase tracking-wider">About</Link>
            <Link href="/portfolio" className="text-white/70 hover:text-white transition text-sm uppercase tracking-wider">Portfolio</Link>
            <Link href="/faq" className="text-white/70 hover:text-white transition text-sm uppercase tracking-wider">FAQ</Link>
            <Link href="/blog" className="text-white/70 hover:text-white transition text-sm uppercase tracking-wider">Blog</Link>
            <a href="https://wa.me/6283841632837" target="_blank" className="bg-white text-black px-6 py-2 rounded-full font-black hover:bg-purple-500 hover:text-white transition-all uppercase tracking-widest text-[10px]">Let's Talk</a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="max-w-5xl mb-24 text-left">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] mb-12 tracking-tighter uppercase">
            <span className="block">Your Technical</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Partner for Growth</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl border-l-2 border-purple-500 pl-8 font-light">
            We help businesses build fast, secure, and AI-ready websites and applications. 
            From startups to enterprises, we provide expert development and strategic guidance 
            as your dedicated partner—not just a freelancer. Now with specialized Python & PHP solutions 
            for AI, data engineering, and automation.
          </p>
        </header>

        {/* How We Work */}
        <section className="mb-32">
          <h2 className="text-4xl font-black text-white mb-12 uppercase tracking-tighter">How We <span className="text-purple-500">Partner</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold text-white mb-2">Discovery & Strategy</h3>
              <p className="text-slate-400">We align on your goals, tech stack, and roadmap. No assumptions—just clarity.</p>
            </div>
            <div className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold text-white mb-2">Agile Development</h3>
              <p className="text-slate-400">Regular sprints, transparent updates, and you're involved every step.</p>
            </div>
            <div className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold text-white mb-2">Long-Term Partnership</h3>
              <p className="text-slate-400">Post-launch support, maintenance, and continuous improvement—we're always here.</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-black text-white mb-12 uppercase tracking-tighter">Solutions for <span className="text-purple-500">2026 & Beyond</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((s, i) => {
              const isRecommended = s.original_price >= 2000;
              const discountPercent = s.original_price ? calculateDiscountPercent(s.original_price, s.price) : null;
              const shortBenefit = getShortBenefit(s.title);
              return (
                <div key={i} className={`group p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col justify-between ${isRecommended ? 'bg-gradient-to-br from-purple-900/40 to-slate-900/60 border-purple-500 shadow-2xl scale-[1.02] z-10' : 'bg-slate-900/30 border-white/5 hover:border-purple-500/30'}`}>
                  <div className="text-left">
                    <div className="flex justify-between items-center mb-4">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${isRecommended ? 'bg-purple-500 text-white' : 'bg-white/5 text-purple-400'}`}>
                        {isRecommended ? '★ 2026 PRO' : 'ESSENTIAL'}
                      </span>
                      <span className="text-slate-800 font-black text-4xl italic opacity-50">0{i+1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition uppercase tracking-tight">{s.title}</h3>
                    <p className="text-purple-400 text-sm font-semibold mb-2 italic">✨ {shortBenefit}</p>
                    <p className="text-slate-400 text-xs leading-relaxed opacity-80 min-h-[70px]">{s.desc}</p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="mb-4 text-left">
                      <span className="text-slate-500 text-[9px] uppercase font-bold tracking-widest block mb-1 font-mono">Investment (USD)</span>
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-4xl font-black text-white tracking-tighter">${s.price}</span>
                        {s.original_price && s.original_price > s.price && (
                          <>
                            <span className="text-lg text-slate-500 line-through">${s.original_price}</span>
                            <span className="text-xs font-bold text-green-400 bg-green-900/50 px-2 py-1 rounded-full">-{discountPercent}%</span>
                          </>
                        )}
                      </div>
                    </div>
                    <button onClick={() => handleAction(s)} className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all active:scale-95 ${isRecommended ? 'bg-purple-600 text-white hover:bg-purple-500 shadow-xl' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                      {s.original_price >= 1000 ? 'Let\'s Discuss →' : 'Select & Continue'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recent Wins */}
        <section className="mb-32">
          <h2 className="text-4xl font-black text-white mb-12 uppercase tracking-tighter">Recent <span className="text-purple-500">Wins</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition">
                <h3 className="text-xl font-bold text-white mb-3">{cs.title}</h3>
                <div className="mb-2"><span className="text-purple-400 font-bold">Problem:</span> <span className="text-slate-400">{cs.problem}</span></div>
                <div className="mb-2"><span className="text-purple-400 font-bold">Solution:</span> <span className="text-slate-400">{cs.solution}</span></div>
                <div><span className="text-purple-400 font-bold">Result:</span> <span className="text-emerald-400 font-semibold">{cs.result}</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Insights */}
        <section className="mb-32">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Insights <span className="text-purple-500">& Trends</span></h2>
            <Link href="/blog" className="text-purple-400 hover:text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              View all articles <span>→</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, idx) => (
              <Link href={`/blog/${post.slug}`} key={idx} className="group">
                <div className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition h-full flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">{post.date}</span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition">{post.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 flex-grow">{post.excerpt}</p>
                  <div className="text-purple-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-48 py-20 border-t border-white/5 text-slate-600 text-[10px] font-mono tracking-[0.3em] uppercase font-bold flex flex-col md:flex-row justify-between items-center gap-10">
          <p>© 2026 KIMPULER.COM — GLOBAL REMOTE OPERATIONS</p>
          <div className="flex gap-10">
            <Link href="/about" className="text-slate-500 hover:text-white">About</Link>
            <Link href="/portfolio" className="text-slate-500 hover:text-white">Portfolio</Link>
            <Link href="/faq" className="text-slate-500 hover:text-white">FAQ</Link>
            <Link href="/blog" className="text-slate-500 hover:text-white">Blog</Link>
            <a href="/terms" className="text-purple-500 hover:text-white">Terms</a>
            <a href="https://wa.me/6283841632837" className="text-emerald-400 animate-pulse">Consult</a>
          </div>
        </footer>
      </div>

      {/* Modal Order */}
      {showModal && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="bg-slate-950 border border-white/10 w-full max-w-xl p-10 rounded-[3rem] shadow-2xl relative overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6 text-left text-white uppercase">
              <h2 className="text-xl font-black italic tracking-widest">Order Details</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-500 hover:text-white transition text-2xl">✕</button>
            </div>
            <form onSubmit={handlePayment} className="space-y-4 text-left">
              <input required placeholder="Your Name" className="bg-white/5 border border-white/10 p-4 rounded-xl w-full focus:border-purple-500 outline-none transition" onChange={e => setFormData({...formData, name: e.target.value})} />
              <input required type="email" placeholder="Your Email" className="bg-white/5 border border-white/10 p-4 rounded-xl w-full focus:border-purple-500 outline-none transition" onChange={e => setFormData({...formData, email: e.target.value})} />
              <input required type="tel" placeholder="WhatsApp Number" className="bg-white/5 border border-white/10 p-4 rounded-xl w-full focus:border-purple-500 outline-none transition" onChange={e => setFormData({...formData, phone: e.target.value})} />
              <textarea required placeholder="Project Description" className="bg-white/5 border border-white/10 p-4 rounded-xl w-full h-28 focus:border-purple-500 outline-none transition resize-none" onChange={e => setFormData({...formData, desc: e.target.value})}></textarea>
              
              <div className="p-4 bg-purple-500/10 rounded-xl flex items-center justify-between border border-purple-500/20 font-mono text-[10px]">
                <span className="text-purple-400 uppercase">Security Check: {captchaValue} + 5 = ?</span>
                <input required type="number" className="bg-black/40 border border-purple-500/30 p-2 rounded-lg w-20 text-center text-white" onChange={e => setFormData({...formData, captcha: e.target.value})} />
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full py-6 bg-purple-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-purple-500 shadow-2xl">Confirm & Pay via PayPal</button>
                <p className="text-[9px] text-slate-600 text-center mt-4 tracking-widest uppercase">
                  By clicking, you agree to our <a href="/terms" className="text-purple-500 underline">Terms of Service</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}