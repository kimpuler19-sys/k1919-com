'use client'
import { useState } from 'react'

export default function OrderPro() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', telegram: '', desc: '', captcha: '' })
  const [captchaBase] = useState(Math.floor(Math.random() * 50) + 10)

  const handleProPayment = (e) => {
    e.preventDefault()
    if (parseInt(formData.captcha) !== captchaBase + 10) { alert("Check Failed!"); return }

    const paypalEmail = "jokonardi@gmail.com";
    const orderNote = `PRO-SOLANA: ${formData.company} | PIC: ${formData.name} | Telegram: ${formData.telegram} | Email: ${formData.email} | Req: ${formData.desc}`;
    const encodedNote = encodeURIComponent(orderNote);
    
    // Redirect to PayPal Business with all form data in item_name
    const finalUrl = `https://www.paypal.com{paypalEmail}&item_name=${encodedNote}&amount=5000&currency_code=USD`;
    
    window.open(finalUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-10 md:p-32 font-sans selection:bg-purple-500/30">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-purple-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 block">← Return to Lobby</a>
        <header className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-4">Pro Solana <span className="text-purple-500">Enterprise</span></h1>
          <p className="text-slate-500 text-sm border-l-2 border-purple-600 pl-6 uppercase tracking-[0.2em] font-bold italic">Official Onboarding Solution // $5,000 USD Investment</p>
        </header>

        <form onSubmit={handleProPayment} className="space-y-8 bg-slate-900/20 p-12 rounded-[3rem] border border-white/5 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <input required placeholder="Your Name" className="bg-white/5 border border-white/10 p-5 rounded-2xl w-full outline-none focus:border-purple-500" onChange={e => setFormData({...formData, name: e.target.value})} />
            <input required type="email" placeholder="Corporate Email" className="bg-white/5 border border-white/10 p-5 rounded-2xl w-full outline-none focus:border-purple-500" onChange={e => setFormData({...formData, email: e.target.value})} />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <input required placeholder="Company Name" className="bg-white/5 border border-white/10 p-5 rounded-2xl w-full outline-none focus:border-purple-500" onChange={e => setFormData({...formData, company: e.target.value})} />
            <input required placeholder="Telegram ID / WhatsApp" className="bg-white/5 border border-white/10 p-5 rounded-2xl w-full outline-none focus:border-purple-500" onChange={e => setFormData({...formData, telegram: e.target.value})} />
          </div>
          <textarea required placeholder="Project Vision & Technical Requirements" className="bg-white/5 border border-white/10 p-5 rounded-2xl w-full h-40 outline-none focus:border-purple-500" onChange={e => setFormData({...formData, desc: e.target.value})}></textarea>
          
          <div className="p-6 bg-purple-500/10 rounded-2xl border border-purple-500/20 flex items-center justify-between font-mono">
            <span className="text-xs font-bold text-purple-400">Security Audit: {captchaBase} + 10 = ?</span>
            <input required type="number" className="bg-black/40 border border-purple-500/50 p-2 rounded-lg w-24 text-center" onChange={e => setFormData({...formData, captcha: e.target.value})} />
          </div>

          <button type="submit" className="w-full py-6 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase tracking-[0.4em] rounded-2xl shadow-2xl shadow-purple-500/30 transition-all text-xs">
            Confirm Enterprise Slot ($5,000)
          </button>
        </form>
      </div>
    </div>
  )
}
