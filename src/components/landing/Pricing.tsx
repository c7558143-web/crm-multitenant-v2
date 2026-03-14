'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/mes',
    description: 'Perfecto para empezar y probar el CRM.',
    popular: false,
    features: [
      '100 Contactos',
      '5 Deals activos',
      '1 Usuario',
      'Reportes básicos',
      'Soporte por email',
    ],
    cta: 'Empezar Gratis',
    href: '/register',
    style: 'border-gray-200 bg-white hover:border-indigo-300',
    btnStyle: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white',
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mes',
    description: 'Para equipos que necesitan más potencia.',
    popular: true,
    features: [
      '1,000 Contactos',
      'Deals ilimitados',
      '5 Usuarios',
      'Reportes avanzados',
      'Soporte prioritario',
      'Campos personalizados',
    ],
    cta: 'Empezar Pro',
    href: '/register?plan=pro',
    style: 'border-indigo-500 bg-indigo-600 shadow-2xl shadow-indigo-500/30',
    btnStyle: 'bg-white text-indigo-700 hover:bg-indigo-50 font-bold',
  },
  {
    name: 'Business',
    price: '$99',
    period: '/mes',
    description: 'Para empresas que escalan sin límites.',
    popular: false,
    features: [
      'Contactos ilimitados',
      'Acceso a API',
      'White label completo',
      'Soporte 24/7',
      'Onboarding dedicado',
      'Desarrollo a medida',
    ],
    cta: 'Contactar Ventas',
    href: '/register?plan=business',
    style: 'border-gray-200 bg-white hover:border-indigo-300',
    btnStyle: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white',
  },
]

export function Pricing() {
  return (
    <div id="pricing" className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
          Precios
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
          Planes para cada
          <span className="text-indigo-600"> etapa</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Desde startups hasta empresas. Todos los planes incluyen tenant aislado con RLS.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative rounded-2xl border-2 p-6 sm:p-8 transition-all duration-300 ${plan.style} ${plan.popular ? 'md:scale-105' : 'hover:-translate-y-1'}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-amber-400 text-amber-900 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
                  ⭐ Más Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className={`text-2xl font-black mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-4 ${plan.popular ? 'text-indigo-200' : 'text-gray-500'}`}>
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1">
                <span className={`text-5xl font-black ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ${plan.popular ? 'text-indigo-200' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className={`h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-indigo-200' : 'text-emerald-500'}`} />
                  <span className={`text-sm font-medium ${plan.popular ? 'text-indigo-100' : 'text-gray-700'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link href={plan.href}>
              <button className={`w-full py-3 px-6 rounded-xl text-base font-bold transition-all duration-200 hover:-translate-y-0.5 ${plan.btnStyle}`}>
                {plan.cta}
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
