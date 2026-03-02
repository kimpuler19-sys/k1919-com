'use client'
import { useState, useEffect } from 'react'

export default function OrderPro() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    company: '', 
    telegram: '', 
    desc: '', 
    captcha: '' 
  })
  const [captchaBase, setCaptchaBase] = useState(0)

  useEffect(() => {
    // Generate Random Captcha khusus halaman Pro
    setCaptchaBase(Math.floor(Math.random() * 50) + 10)
  }, [])

  const handleProPayment = (e) => {
    e.preventDefault()
    
    // 1. Validasi Captcha (Angka Acak + 10)
    if (parseInt(formData.captcha) !== captchaBase + 10) { 
      alert("Security Audit Failed! Please calculate correctly."); 
      return 
    }

    // 2. Konfigurasi Data Penjual
    const paypalEmail = "jokonardi@gmail.com";
    
    // 3. Gabungkan Data Form menjadi Catatan Pesanan Profesional
    const orderNote = `PRO-SOLANA ENTERPRISE | Company: ${formData.company} | PIC: ${formData.name} | Telegram: ${formData.telegram} | Email: ${formData.email} | Req: ${formData.desc}`;
    
    // 4. Pembuatan URL PayPal Business yang Valid (FIXED)
    const baseUrl = "https://www.paypal.com";
    const params = new URLSearchParams({
      cmd: "_xclick",
      business: paypalEmail,
      item_name: orderNote,
      amount: "5000",
      currency_code: "USD"
    });

    const finalUrl = `${baseUrl}?${params.toString()}`;
    
    // 5. Eksekusi Redirect
    try {
      window.open(finalUrl, '_blank');
    } catch (err) {
      // Fallback jika popup diblokir browser
      window.location.href = finalUrl;
    }
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-10 md:p-32 font-sans selection:bg-purple-500/30">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <a href="/" className="text-purple-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 block hover:text-white transition-colors">
          ← Return to Global Lobby
        </a>

        {/* Header Branding */}
        <header className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-4">
            Pro Solana <span className="text-purple-500">Enterprise</span>
          </h1>
          <p className="text-slate-500 text-sm border-l-2 border-purple-600 pl-6 uppercase tracking-[0.2em] font-bold italic">
            Official High-Tier Onboarding // $5,000 USD Investment
          </p>
        </header>

        {/* Enterprise Form */}
        <form onSubmit={handleProPayment} className="space-y-8 bg-slate-900/20 p-12 rounded-[3rem] border border-white/5 backdrop-blur-xl shadow-2xl shadow-purple-500/10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-slate-500 ml-2">Full Name</label>
              <input required placeholder="Authorized Person" className="bg-white/5 border border-white/10 p-5 rounded-2xl w-full outline-none focus:border-purple-500 transition-all" 
                onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-slate-500 ml-2">Corporate Email</label>
              <input required type="email" placeholder="example@company.com" className="bg-white/5 border border-white/10 p-5 rounded-2xl w-full outline-none focus:border-purple-500 transition-all" 
                onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-slate-500 ml-2">Company / Project Name</label>
              <input required placeholder="Entity Name" className="bg-white/5 border border-white/10 p-5 rounded-2xl w-full outline-none focus:border-purple-500 transition-all" 
                onChange={e => setFormData({...formData, company: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-slate-500 ml-2">Telegram ID / WhatsApp</label>
              <input required placeholder="@username or +62..." className="bg-white/5 border border-white/10 p-5 rounded-2xl w-full outline-none focus:border-purple-500 transition-all" 
                onChange={e => setFormData({...formData, telegram: e.target.value})} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-slate-500 ml-2">Project Vision & Technical Scope</label>
            <textarea required placeholder="Outline your blockchain requirements and goals..." className="bg-white/5 border border-white/10 p-5 rounded-2xl w-full h-44 outline-none focus:border-purple-500 transition-all resize-none" 
              onChange={e => setFormData({...formData, desc: e.target.value})}></textarea>
          </div>
          
          <div className="p-6 bg-purple-500/10 rounded-2xl border border-purple-500/20 flex items-center justify-between font-mono">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest italic">Security Audit: {captchaBase} + 10 = ?</span>
            <input required type="number" className="bg-black/40 border border-purple-500/50 p-3 rounded-xl w-28 text-center text-white" 
              onChange={e => setFormData({...formData, captcha: e.target.value})} />
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full py-7 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase tracking-[0.4em] rounded-3xl shadow-2xl shadow-purple-500/30 transition-all text-xs active:scale-95">
              Confirm & Secure Enterprise Slot ($5,000)
            </button>
            <p className="text-[9px] text-slate-600 text-center mt-6 uppercase tracking-[0.3em]">
              🔒 Encrypted Gateway via PayPal Business Standard
            </p>
          </div>
        </form>
      </div>

      <footer className="mt-40 text-center text-slate-700 text-[9px] font-mono tracking-widest uppercase">
        © 2026 KIMPULER.COM — SECURE BLOCKCHAIN DEPLOYMENT UNIT
      </footer>
    </div>
  )
}
