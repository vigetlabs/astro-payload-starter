import type { AccessArgs } from 'payload/config'

import type { User } from '@/payload-types'

import { checkRole } from '@/collections/Users/checkRole'

// eslint-disable-next-line no-unused-vars
type isAdmin = (args: AccessArgs<User>) => boolean

export const admins: isAdmin = ({ req: { user } }) => {
  return checkRole(['admin'], user)
}
