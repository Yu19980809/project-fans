import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'

import db from '@/lib/db'

const useCurrentUser = async () => {
  const { userId } = auth()

  if (!userId) redirect('/sign-in')

  const user = await db.user.findUnique({
    where: { externalId: userId }
  })

  return user
}

export default useCurrentUser
