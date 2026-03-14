'use client'

import { motion } from 'framer-motion'
import { Users, Award, Star } from 'lucide-react'

export function SocialProof() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-20 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
          <div>
            <Users className="h-16 w-16 text-indigo-500 mx-auto mb-4" />
            <div className="text-4xl font-black text-gray-900 mb-2 drop-shadow-md">10K+</div>
            <div className="text-lg font-semibold text-gray-800 drop-shadow-md">Empresas activas</div>
          </div>
          
          <div>
            <Star className="h-16 w-16 text-amber-500 mx-auto mb-4" />
            <div className="text-4xl font-black text-gray-900 mb-2 drop-shadow-md">4.9⭐</div>
            <div className="text-lg font-semibold text-gray-800 drop-shadow-md">Trustpilot</div>
          </div>
          
          <div>
            <Award className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
            <div className="text-4xl font-black text-gray-900 mb-2 drop-shadow-md">$5M+</div>
            <div className="text-lg font-semibold text-gray-800 drop-shadow-md">MRR generado</div>
          </div>
          
          <div>
            <Users className="h-16 w-16 text-purple-500 mx-auto mb-4" />
            <div className="text-4xl font-black text-gray-900 mb-2 drop-shadow-md">150+</div>
            <div className="text-lg font-semibold text-gray-800 drop-shadow-md">Países</div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
