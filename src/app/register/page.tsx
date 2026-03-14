'use client'

import { Suspense, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

function RegisterForm() {
  const searchParams = useSearchParams()
  const defaultPlan = (searchParams.get('plan') as 'free' | 'pro' | 'business') || 'free'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [plan, setPlan] = useState<'free' | 'pro' | 'business'>(defaultPlan)
  const router = useRouter()

  const supabase = createClient()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { plan }
      }
    })

    if (signUpError) {
      setError(signUpError.message)
    } else {
      router.push('/dashboard')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="max-w-md w-full bg-white shadow-xl rounded-3xl p-6 sm:p-10 md:p-12 space-y-6 sm:space-y-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Crea tu CRM
          </h2>
          <p className="text-gray-600 mt-2">Multi-tenant listo para tu negocio</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email de empresa
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
              placeholder="contacto@tuempresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              required
              minLength={8}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
              placeholder="Mínimo 8 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Plan inicial
            </label>
            <select
              value={plan}
              onChange={(e) => setPlan(e.target.value as 'free' | 'pro' | 'business')}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 bg-white"
            >
              <option value="free">Free - 100 contacts</option>
              <option value="pro">Pro - 1K contacts ($29/mes)</option>
              <option value="business">Business - Unlimited ($99/mes)</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl"
          >
            {loading ? 'Creando tenant...' : '🚀 Crear Cuenta + CRM'}
          </button>
        </form>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            Al continuar creamos tu tenant aislado con RLS.
          </p>
          <p className="text-sm text-gray-600">
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" className="text-indigo-600 font-semibold hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-pulse text-indigo-600 text-lg font-semibold">Cargando...</div>
      </div>
    }>
      <RegisterForm />
    </Suspense>
  )
}
