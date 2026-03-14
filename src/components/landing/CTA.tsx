'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const perks = [
  'Sin tarjeta de crédito',
  'Setup en 2 minutos',
  'Cancela cuando quieras',
]

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
            Empieza hoy
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Listo para transformar
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              tu negocio?
            </span>
          </h2>

          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Únete a más de 10,000 empresas que ya escalan con nuestro CRM multitenant.
            Tu tenant aislado, listo en minutos.
          </p>

          {/* Perks */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                {perk}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <button className="flex items-center justify-center gap-2 px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-bold rounded-2xl shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300">
                Crear Mi CRM Gratis
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <Link href="#features">
              <button className="flex items-center justify-center gap-2 px-10 py-4 bg-white/10 hover:bg-white/20 text-white text-lg font-semibold rounded-2xl border border-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-300">
                Ver todas las features
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
