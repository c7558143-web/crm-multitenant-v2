'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'María González',
    role: 'CEO',
    company: 'Ecommerce Startup',
    text: 'De 0 a 500 clientes en 3 meses. El CRM perfecto para escalar rápido sin complicaciones técnicas.',
    avatar: 'MG',
    color: 'bg-indigo-500',
    stars: 5,
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Fundador',
    company: 'Agencia Digital',
    text: 'White label perfecto. Tenemos 20 clientes usando el mismo CRM con su propia marca. Increíble.',
    avatar: 'CR',
    color: 'bg-purple-500',
    stars: 5,
  },
  {
    name: 'Ana López',
    role: 'Directora Comercial',
    company: 'Real Estate Pro',
    text: 'El aislamiento multi-tenant nos salvó. Manejamos 10K leads de diferentes agencias sin mezclar datos.',
    avatar: 'AL',
    color: 'bg-emerald-500',
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Lo que dicen nuestros{' '}
            <span className="text-indigo-600">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Más de 10,000 empresas confían en nuestra plataforma.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-gray-100 hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role} · {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
