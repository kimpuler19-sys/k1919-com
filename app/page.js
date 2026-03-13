'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [services, setServices] = useState([])
  const [selectedService, setSelectedService] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', desc: '', captcha: '' })
  const [captchaValue, setCaptchaValue] = useState(0)

  useEffect(() => {
    fetch('/api/services').then(res => res.json()).then(json => setServices(json)).catch(err => console.error(err))
    setCaptchaValue(Math.floor(Math.random() * 80) + 10)
  }, [])

  const handleAction = (s) => {
    // Semua layanan sekarang akan memicu modal yang sama (kecuali Anda ingin logika khusus)
    setSelectedService(s);
    setShowModal(true);
  }

  const handlePayment = (e) => {
    e.preventDefault()
    if (parseInt(formData.captcha) !== captchaValue + 5) { alert("Security Check Failed!"); return }
    const paypalEmail = "jokonardi@gmail.com";
    // Memperbaiki orderNote agar lebih rapi dan menggunakan nilai yang benar
    const orderNote = `Order: ${selectedService.title} | Client: ${formData.name} | WA: ${formData.phone} | Email: ${formData.email} | Project: ${formData.desc}`;
    const baseUrl = "https://www.paypal.com/cgi-bin/webscr"; // URL yang lebih standar
    const params = new URLSearchParams({
      cmd: "_xclick",
      business: paypalEmail,
      item_name: orderNote.substring(0, 120), // PayPal batasi panjang, potong jika perlu
      amount: selectedService.paypal_val,
      currency_code: "USD",
      // Tambahkan return dan cancel URL jika diperlukan
      // return: "https://kimpuler.com/success",
      // cancel_return: "https://kimpuler.com"
    });
    window.open(`${baseUrl}?${params.toString()}`, '_blank')
    setShowModal(false)
  }

  // Fungsi untuk menghitung persentase diskon
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
        <nav className="flex justify-between items-center mb-16 border-b border-white/5 pb-8 font-mono">
          <div className="text-3xl font-black tracking-tighter text-white uppercase italic underline decoration-purple-500 decoration-4 underline-offset-8">KIMPULER</div>
          <div className="flex gap-6 items-center">
            <a href="https://wa.me/6283841632837" target="_blank" className="bg-white text-black px-6 py-2 rounded-full font-black hover:bg-purple-500 hover:text-white transition-all uppercase tracking-widest text-[10px]">Verify Availability</a>
          </div>
        </nav>

        <header className="max-w-5xl mb-24 text-left">
          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] mb-12 tracking-tighter uppercase">
            Develop your<br/>Idea For <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 italic">Future.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl border-l-2 border-purple-500 pl-8 font-light italic">
            Expert development & AI-ready solutions for global leaders. Specialized in modern stacks, blockchain, and performance optimization.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((s, i) => {
            // Tentukan apakah layanan ini "direkomendasikan" (misal: harga di atas 2000 atau yang baru)
            const isRecommended = s.original_price >= 2000 || i >= 6; // Layanan baru (indeks 6-11) juga direkomendasikan
            const discountPercent = s.original_price ? calculateDiscountPercent(s.original_price, s.price) : null;
            return (
              <div key={i} className={`group p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col justify-between ${isRecommended ? 'bg-gradient-to-br from-purple-900/40 to-slate-900/60 border-purple-500 shadow-2xl scale-[1.02] z-10' : 'bg-slate-900/30 border-white/5 hover:border-purple-500/30'}`}>
                <div className="text-left">
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${isRecommended ? 'bg-purple-500 text-white' : 'bg-white/5 text-purple-400'}`}>
                      {isRecommended ? '★ 2026 Pro' : 'Essential'}
                    </span>
                    <span className="text-slate-800 font-black text-4xl italic opacity-50">0{i+1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition uppercase tracking-tight leading-tight">{s.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed opacity-80 min-h-[90px]">{s.desc}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="mb-4 text-left">
                    <span className="text-slate-500 text-[9px] uppercase font-bold tracking-widest block mb-1 font-mono">Investment (USD)</span>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      {/* Tampilkan harga diskon */}
                      <span className="text-4xl font-black text-white tracking-tighter">${s.price}</span>
                      {/* Tampilkan harga asli yang dicoret jika ada */}
                      {s.original_price && s.original_price > s.price && (
                        <>
                          <span className="text-lg text-slate-500 line-through">${s.original_price}</span>
                          <span className="text-xs font-bold text-green-400 bg-green-900/50 px-2 py-1 rounded-full">-{discountPercent}%</span>
                        </>
                      )}
                    </div>
                  </div>
                  <button onClick={() => handleAction(s)} className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all active:scale-95 ${isRecommended ? 'bg-purple-600 text-white hover:bg-purple-500 shadow-xl' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    Select & Continue
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <footer className="mt-48 py-20 border-t border-white/5 text-slate-600 text-[10px] font-mono tracking-[0.3em] uppercase font-bold flex flex-col md:flex-row justify-between items-center gap-10">
          <p>© 2026 KIMPULER.COM — GLOBAL REMOTE OPERATIONS</p>
          <div className="flex gap-10">
            <a href="/terms" className="text-purple-500 hover:text-white">Terms of Service</a>
            <a href="https://wa.me/6283841632837" className="text-emerald-400 animate-pulse">Consult Now</a>
          </div>
        </footer>
      </div>

      {/* MODAL (sama persis dengan kode asli Anda, tidak perlu diubah) */}
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