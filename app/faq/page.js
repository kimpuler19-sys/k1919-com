// app/faq/page.js
'use client'

import Link from 'next/link'
import { useState } from 'react'

const faqs = [
  {
    question: "How do you structure your engagement?",
    answer: "We typically start with a discovery call to understand your needs, then propose a tailored solution. For smaller projects, we provide a fixed quote. For larger, ongoing work, we offer weekly or monthly retainers. We're flexible to what works best for you."
  },
  {
    question: "What if I need ongoing support after launch?",
    answer: "That's where we shine! We offer proactive maintenance retainers that include security updates, performance monitoring, and priority support. You'll have a dedicated partner who knows your system inside out."
  },
  {
    question: "How do you handle communication and project management?",
    answer: "We use tools like Slack, Trello/Asana, and regular video calls to keep you in the loop. You'll get daily or weekly updates depending on the project size. Transparency is key."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our core stack includes Next.js, React, Node.js, Python, and PHP for web apps. For databases, we're expert in PostgreSQL, MySQL, and MongoDB. On blockchain, we work with Solana (Rust/Anchor) and Ethereum (Solidity). We also integrate AI features using OpenAI and vector databases."
  },
  {
    question: "Can you take over an existing project?",
    answer: "Absolutely! We've rescued and improved many existing codebases. We'll conduct an initial audit to understand the architecture and then propose improvements."
  },
  {
    question: "How do you ensure quality and security?",
    answer: "We follow industry best practices: code reviews, automated testing, dependency scanning, and secure coding guidelines. For security-critical projects, we can also arrange third-party audits."
  },
  {
    question: "What are your payment terms?",
    answer: "For fixed projects, we typically ask for 50% upfront and 50% on completion. For retainers, payment is monthly in advance. We accept PayPal, bank transfer, or crypto (USDC/USDT)."
  },
  {
    question: "Do you sign NDAs or work under contract?",
    answer: "Yes, we're comfortable with NDAs and formal contracts. We want you to feel secure in our partnership."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
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
          <h1 className="text-5xl font-black text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-400">Everything you need to know about working with us. If you don't see your question, just ask!</p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-900/30 border border-white/5 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-purple-900/20 transition"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                <span className="text-purple-400 text-2xl">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-purple-900/20 rounded-3xl border border-purple-500/30 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-slate-300 mb-6">We're happy to answer any additional questions personally.</p>
          <a href="https://wa.me/6283841632837" target="_blank" className="inline-block bg-purple-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-purple-500 transition shadow-xl">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}