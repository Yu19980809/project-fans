import db from '@/lib/db'

export const fetchAllusers = async () => {
  const users = await db.user.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return users
}

export const fetchUserInfo = async (externalId: string) => {
  if (!externalId) return { error: 'Missing ID' }

  const existingUser = await db.user.findUnique({
    where: { externalId }
  })

  if (!existingUser) return { error: 'Invalid ID' }

  const followersCount = await db.user.count({
    where: {
      followingIds: {
        has: existingUser.id
      }
    }
  })

  return {...existingUser, followersCount}
}
