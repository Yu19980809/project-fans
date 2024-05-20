'use server'

import { z } from 'zod'

import db from '@/lib/db'
import { UpdateUserSchema } from '@/lib/schemas'

export const getUserById = async (userId: string) => {
  const user = await db.user.findUnique({
    where: { id: userId }
  })

  return user
}

export const fetchAllusers = async () => {
  const users = await db.user.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return users
}

export const fetchUserInfo = async (userId: string) => {
  if (!userId) throw new Error('Missing ID')

  const existingUser = await db.user.findUnique({
    where: { id: userId }
  })

  if (!existingUser) throw new Error('Invalid ID')

  const followersCount = await db.user.count({
    where: {
      followingIds: {
        has: existingUser?.id
      }
    }
  })

  return {...existingUser, followersCount}
}

export const updateUserInfo = async (
  userId: string,
  values: z.infer<typeof UpdateUserSchema>
) => {
  const validatedFields = UpdateUserSchema.safeParse(values)
  if (!validatedFields.success) throw new Error('Wrong values')
  if (!userId) throw new Error('Missing user ID')

  const {
    name,
    username,
    bio,
    profileImage,
    coverImage
  } = validatedFields.data

  const existingUser = await getUserById(userId)
  if (!existingUser) throw new Error('Invalid user ID')

  const updatedUser = await db.user.update({
    where: { id: existingUser.id },
    data: {
      name,
      username,
      bio,
      image: profileImage,
      coverImage
    }
  })

  return updatedUser
}
