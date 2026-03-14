'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              CRM<span className="text-indigo-400">Pro</span>
            </h3>
            <p className="text-sm leading-relaxed">
              CRM multitenant diseñado para escalar con tu negocio. 
              Gestiona contactos, deals y tareas con aislamiento total por empresa.
            </p>
          </div>

          {/* Producto */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Producto
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-white transition-colors">
                  Crear cuenta
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Iniciar sesión
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Sobre nosotros
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Blog
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Contacto
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Términos de servicio
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Política de privacidad
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Cookies
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} CRMPro. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-500">
              Hecho con Next.js + Supabase + Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
