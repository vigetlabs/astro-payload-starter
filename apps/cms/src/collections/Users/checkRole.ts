import type { User } from '@/payload-types'

export const checkRole = (
  allRoles: User['roles'] = [],
  user?: User,
): boolean => {
  if (!user) return false

  return allRoles.some((role) => {
    return user?.roles?.some((individualRole) => {
      return individualRole === role
    })
  })
}
