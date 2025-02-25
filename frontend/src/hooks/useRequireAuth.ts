import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function useRequireAuth(role?: 'manager' | 'prep') {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/login')
    } else if (role && session.user.role !== role) {
      router.push('/')
    }
  }, [session, status, role, router])

  return { session, status }
} 