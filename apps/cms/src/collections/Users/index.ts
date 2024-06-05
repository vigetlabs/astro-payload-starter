import type { CollectionConfig } from 'payload/types'

import { admins } from '@/access'
import { adminsAndCurrentUser } from './access/adminsAndCurrentUser'
import { ensureFirstUserIsAdmin } from './hooks/ensureFirstUserIsAdmin'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    create: admins,
    read: adminsAndCurrentUser,
    update: adminsAndCurrentUser,
    delete: admins,
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['firstName', 'lastName', 'email'],
  },
  auth: true,
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'roles',
      type: 'select',
      required: true,
      defaultValue: ['user'],
      hasMany: true,
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      options: ['admin', 'user'],
      access: {
        create: admins,
        read: admins,
        update: admins,
      },
    },
  ],
}
