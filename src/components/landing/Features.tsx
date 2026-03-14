'use client'

import { motion } from 'framer-motion'
import { Database, Shield, Zap, Users, Globe, Layers } from 'lucide-react'

const features = [
  {
    title: 'Multi-Tenant Nativo',
    description: 'Cada cliente completamente aislado con RLS de PostgreSQL. Escala a miles de tenants sin esfuerzo.',
    icon: Database,
    color: 'bg-indigo-500',
    light: 'bg-indigo-50',
    text: 'text-indigo-600',
  },
  {
    title: 'Planes Flexibles',
    description: 'Free, Pro y Business. Integración con Stripe lista. Cambia de plan en un clic.',
    icon: Users,
    color: 'bg-emerald-500',
    light: 'bg-emerald-50',
    text: 'text-emerald-600',
  },
  {
    title: 'Supabase Power',
    description: 'Auth, Edge Functions y Realtime incluidos. Backend production-ready desde el día 1.',
    icon: Shield,
    color: 'bg-purple-500',
    light: 'bg-purple-50',
    text: 'text-purple-600',
  },
  {
    title: 'Cascarón Puro',
    description: 'Contacts, Deals, Tasks y Reports. Módulos genéricos que se adaptan a cualquier rubro.',
    icon: Layers,
    color: 'bg-orange-500',
    light: 'bg-orange-50',
    text: 'text-orange-600',
  },
  {
    title: 'Performance Elite',
    description: 'Next.js App Router + Turbopack. Menos de 1 segundo de carga. SEO optimizado.',
    icon: Zap,
    color: 'bg-amber-500',
    light: 'bg-amber-50',
    text: 'text-amber-600',
  },
  {
    title: 'White Label',
    description: 'Subdominios personalizados y branding propio. Tu marca, tu identidad.',
    icon: Globe,
    color: 'bg-rose-500',
    light: 'bg-rose-50',
    text: 'text-rose-600',
  },
]

export function Features() {
  return (
    <div id="features" className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
          Características
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
          Todo lo que necesitas,
          <br />
          <span className="text-indigo-600">nada que no necesitas</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Un cascarón inteligente que se adapta a cualquier negocio. Sin configuración compleja.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className={`inline-flex p-3 rounded-xl ${feature.light} mb-5`}>
              <feature.icon className={`h-7 w-7 ${feature.text}`} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
