'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Zap, Shield } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-semibold px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          Plataforma CRM Multitenant #1
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight"
        >
          El CRM que
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            escala contigo
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
        >
          CRM multitenant listo para <strong className="text-white">cualquier negocio</strong>.
          Aislamiento RLS, planes flexibles y dashboard personalizable.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-2"
        >
          <Link href="/register">
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 sm:px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-base sm:text-lg font-bold rounded-2xl shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300">
              🚀 Crear Mi CRM Gratis
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
          <Link href="#features">
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 sm:px-10 py-4 bg-white/10 hover:bg-white/20 text-white text-base sm:text-lg font-semibold rounded-2xl border border-white/20 hover:border-white/40 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300">
              Ver Demo
            </button>
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 text-slate-400 text-xs sm:text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-indigo-400" />
            <span>Seguridad RLS</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-purple-400" />
            <span>+10K Tenants activos</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-amber-400" />
            <span>Carga en &lt;1s</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
