import type { Access } from 'payload/types'

import { checkRole } from '../checkRole'

export const adminsAndUser: Access = ({ req: { user } }) => {
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
