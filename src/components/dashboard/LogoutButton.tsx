'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function LogoutButton() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    setLoading(true)
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={handleLogout}
      disabled={loading}
    >
      {loading ? 'Cerrando...' : '🚪 Cerrar Sesión'}
    </Button>
  )
}
