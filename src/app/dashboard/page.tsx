import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Users, Zap, Database, Shield } from 'lucide-react'
import { LogoutButton } from '@/components/dashboard/LogoutButton'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
          <p className="text-xl text-gray-600 mb-8">Redirigiendo a login...</p>
        </div>
      </div>
    )
  }

  // Placeholder tenant data (RLS will filter real data when connected)
  const tenant = {
    name: 'Mi Empresa',
    contacts_count: 0,
    deals_count: 0,
    tasks_count: 0,
    deals_total: 0,
    users_count: 1,
    subscriptions: [
      {
        plans: { name: 'Free' },
      },
    ],
    id: 'tenant-abc123',
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-clip-text text-transparent">
              Dashboard{' '}
              <span className="text-indigo-600">{tenant.name}</span>
            </h1>
            <p className="text-xl text-gray-600 mt-2">
              Plan:{' '}
              <span className="font-semibold text-emerald-600">
                {tenant.subscriptions[0].plans.name}
              </span>{' '}
              | Contactos:{' '}
              <span className="font-semibold">{tenant.contacts_count}</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <LogoutButton />
            <Button variant="outline" size="lg">
              ⚙️ Configuración
            </Button>
            <Button size="lg">➕ Nuevo Contacto</Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-2xl font-black text-indigo-600">
                <Users className="h-8 w-8" />
                {tenant.contacts_count}
              </CardTitle>
              <CardDescription>Contactos</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-black text-gray-900">0</p>
              <p className="text-sm text-gray-500 mt-1">
                Empieza agregando clientes
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-2xl font-black text-emerald-600">
                <Zap className="h-8 w-8" />${tenant.deals_total}
              </CardTitle>
              <CardDescription>Deals Pipeline</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-black text-gray-900">0</p>
              <p className="text-sm text-gray-500 mt-1">Pipeline vacío</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-2xl font-black text-orange-600">
                <Database className="h-8 w-8" />
                {tenant.tasks_count}
              </CardTitle>
              <CardDescription>Tasks Pendientes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-black text-gray-900">0</p>
              <p className="text-sm text-gray-500 mt-1">Todo listo</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-2xl font-black text-purple-600">
                <Shield className="h-8 w-8" />
                100%
              </CardTitle>
              <CardDescription>Completado</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-black text-gray-900">Ready</p>
            </CardContent>
          </Card>
        </div>

        {/* CRM Modules Grid */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Cascarón CRM Multitenant</CardTitle>
            <CardDescription>
              Módulos genéricos listos. Todos filtrados por tenant_id + RLS.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { icon: '👥', title: 'Contactos', href: '/dashboard/contacts' },
                { icon: '💰', title: 'Deals', href: '/dashboard/deals' },
                { icon: '📋', title: 'Tasks', href: '/dashboard/tasks' },
                { icon: '📊', title: 'Reports', href: '/dashboard/reports' },
                { icon: '⚙️', title: 'Settings', href: '/dashboard/settings' },
                { icon: '👥', title: 'Team', href: '/dashboard/team' },
              ].map((mod) => (
                <Link
                  key={mod.title}
                  href={mod.href}
                  className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-48"
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                    {mod.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600">
                    {mod.title}
                  </h3>
                  <p className="text-gray-500 text-sm">Listo para usar</p>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity + Tenant Info */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Actividad Reciente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { text: 'Primer contacto creado', time: 'hace 5 min' },
                  { text: 'Plan Free activado', time: 'hace 10 min' },
                  { text: 'Tenant configurado', time: 'hace 15 min' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl border"
                  >
                    <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                    <span className="font-medium text-gray-900">
                      {item.text}
                    </span>
                    <span className="ml-auto text-sm text-gray-500">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tu Tenant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="text-sm text-gray-500 block">Plan</span>
                <span className="font-bold text-lg text-emerald-600">
                  {tenant.subscriptions[0].plans.name}
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-500 block">Estado</span>
                <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Activo
                </span>
              </div>
              <div className="pt-4 space-y-2">
                <Button size="sm" variant="outline" className="w-full">
                  Upgrade Plan
                </Button>
                <Button size="sm" className="w-full">
                  API Keys
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
