'use client'
import Link from 'next/link'

export default function HowItWorks() {
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
          <h1 className="text-5xl font-black text-white mb-6">How We Work</h1>
          <p className="text-xl text-slate-400 max-w-3xl">
            A transparent, collaborative process designed to turn your ideas into reality. 
            From first contact to long-term support, we're with you every step.
          </p>
        </header>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4">
              <div className="text-7xl font-black text-purple-500/30">01</div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-3xl font-bold text-white mb-4">Discovery Call</h2>
              <p className="text-slate-300 text-lg mb-4">
                We start with a free 30-minute video call to understand your project goals, 
                target audience, and technical requirements. No pressure, just clarity.
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Discuss your vision and objectives</li>
                <li>Identify key features and functionality</li>
                <li>Clarify budget and timeline expectations</li>
                <li>Answer any initial questions</li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4">
              <div className="text-7xl font-black text-purple-500/30">02</div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-3xl font-bold text-white mb-4">Proposal & Quote</h2>
              <p className="text-slate-300 text-lg mb-4">
                Within 2-3 business days, you'll receive a detailed proposal including:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Project scope and deliverables</li>
                <li>Technology stack recommendations</li>
                <li>Timeline with milestones</li>
                <li>Transparent pricing (fixed or hourly)</li>
                <li>Terms and conditions</li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4">
              <div className="text-7xl font-black text-purple-500/30">03</div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-3xl font-bold text-white mb-4">Development Sprint</h2>
              <p className="text-slate-300 text-lg mb-4">
                Once the proposal is approved and deposit received, development begins. 
                You'll get access to a private Trello board for real-time updates.
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Agile methodology with weekly sprints</li>
                <li>Regular demos and progress reviews</li>
                <li>Continuous communication via Slack/WhatsApp</li>
                <li>Testing and quality assurance throughout</li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4">
              <div className="text-7xl font-black text-purple-500/30">04</div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-3xl font-bold text-white mb-4">Delivery & Support</h2>
              <p className="text-slate-300 text-lg mb-4">
                After final approval and payment, we deploy your project and provide:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>30 days of free bug fixes and support</li>
                <li>Handover of all source code and documentation</li>
                <li>Optional maintenance retainer for ongoing peace of mind</li>
                <li>We're always here for future enhancements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to start your project?</h2>
          <Link href="/contact" className="inline-block bg-purple-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-purple-500 transition shadow-xl">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  )
}