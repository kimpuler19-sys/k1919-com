'use client'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { submitContact } from '@/app/actions/contact'

export default function ContactPage() {
  const [status, setStatus] = useState(null)
  const ref = useRef()

  async function handleSubmit(formData) {
    setStatus({ type: 'loading', message: 'Sending...' })
    const result = await submitContact(formData)
    if (result.success) {
      setStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' })
      ref.current?.reset()
    } else {
      setStatus({ type: 'error', message: result.error || 'Something went wrong.' })
    }
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="flex justify-between items-center mb-16 border-b border-white/5 pb-8 font-mono">
          <Link href="/" className="text-3xl font-black tracking-tighter text-white uppercase italic underline decoration-purple-500 decoration-4 underline-offset-8">KIMPULER</Link>
          <Link href="/" className="text-white/60 hover:text-white transition text-sm">← Back to Home</Link>
        </nav>

        <header className="mb-16">
          <h1 className="text-5xl font-black text-white mb-6">Contact Us</h1>
          <p className="text-xl text-slate-400 max-w-3xl">Have a project in mind or want to learn more about our services? Send us a message and we'll get back to you within 24 hours.</p>
        </header>

        <div className="bg-slate-900/30 p-8 md:p-12 rounded-[3rem] border border-white/5">
          <form ref={ref} action={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            {status && (
              <div className={`p-4 rounded-xl ${
                status.type === 'success' ? 'bg-green-900/20 border border-green-500/30 text-green-400' :
                status.type === 'error' ? 'bg-red-900/20 border border-red-500/30 text-red-400' :
                'bg-purple-900/20 border border-purple-500/30 text-purple-400'
              }`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status?.type === 'loading'}
              className="w-full py-4 bg-purple-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-purple-500 transition shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status?.type === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/5">
            <h2 className="text-lg font-bold text-white mb-4">Other ways to reach us</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="https://wa.me/6283841632837" target="_blank" className="flex items-center gap-3 text-slate-300 hover:text-white transition">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.473-.149-.673.15-.197.3-.767.966-.94 1.164-.173.199-.346.223-.643.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.672-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.118 1.523 5.851L.042 23.958l6.162-1.496C8.049 23.368 9.954 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.915 0-3.722-.544-5.254-1.495l-.377-.226-3.658.888.975-3.569-.232-.389C3.006 15.917 2.5 14.025 2.5 12c0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5z"/></svg>
                <span>WhatsApp: +62 838 4163 2837</span>
              </a>
              <a href="mailto:jokonardi@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <span>kimpuler19@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}