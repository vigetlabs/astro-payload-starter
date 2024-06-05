import type { Access } from 'payload/types'

import { checkRole } from '../checkRole'

/**
 * Access control function which returns `true` for users with an
 * 'admin' role, and for the currently logged in user.
 */
export const adminsAndCurrentUser: Access = ({ req: { user } }) => {
  if (!user) return false

  if (checkRole(['admin'], user)) {
    return true
  }

  return {
    id: {
      equals: user.id,
    },
  }
}
