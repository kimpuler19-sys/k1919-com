'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [services, setServices] = useState([])

  useEffect(() => {
    // Memanggil API Python FastAPI yang kita buat tadi
    fetch('/api/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <header className="text-center py-20">
          <h1 className="text-6xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Kimpuler Agency
          </h1>
          <p className="text-xl text-slate-400">High-End Digital Solutions & Professional Live Host</p>
        </header>

        {/* Services Grid (Data dari Python) */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div key={index} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500 transition">
              <h3 className="text-xl font-bold text-blue-400 mb-2">{item.name || item.title}</h3>
              <p className="text-slate-500 mb-4">{item.desc || "Professional service solution."}</p>
              <span className="text-emerald-400 font-mono font-bold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
