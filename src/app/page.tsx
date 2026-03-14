'use client'

import { Navbar } from '@/components/landing/Navbar'
import { Hero } from '@/components/landing/Hero'
import { SocialProof } from '@/components/landing/SocialProof'
import { Features } from '@/components/landing/Features'
import { Pricing } from '@/components/landing/Pricing'
import { Testimonials } from '@/components/landing/Testimonials'
import { CTA } from '@/components/landing/CTA'
import { Footer } from '@/components/landing/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero - dark background, full height */}
      <Hero />

      {/* Social Proof - light background */}
      <SocialProof />

      {/* Features - white background */}
      <section id="features" className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <Features />
        </div>
      </section>

      {/* Pricing - white background */}
      <section id="pricing" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Pricing />
        </div>
      </section>

      {/* Testimonials - gray background */}
      <Testimonials />

      {/* CTA - dark background */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}
