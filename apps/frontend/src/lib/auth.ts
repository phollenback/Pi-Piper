import { getSession as getNextAuthSession } from 'next-auth/react'

export async function getSession() {
  return await getNextAuthSession()
}

export async function getCurrentUser() {
  const session = await getSession()
  return session?.user
} 