import type { FieldHook } from 'payload/types'

import type { User } from '@/payload-types'

/**
 * Field hook which ensures the first user created is an admin.
 * 1. Lookup a single user on create as succinctly as possible.
 * 2. If there are no users found, append `admin` to the roles array.
 *
 * Access control is already handled by this fields `access` property.
 * It ensures that only admins can create and update the `roles` field.
 */
export const ensureFirstUserIsAdmin: FieldHook<User> = async ({
  operation,
  req,
  value,
}) => {
  if (operation === 'create') {
    const users = await req.payload.find({
      collection: 'users',
      depth: 0,
      limit: 0,
    })
    if (users.totalDocs === 0) {
      // if `admin` not in array of values, add it
      if (!(value || []).includes('admin')) {
        return [...(value || []), 'admin']
      }
    }
  }

  return value
}
