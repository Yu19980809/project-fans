// import { auth } from '@clerk/nextjs/server'

import { UserInfo } from '@/lib/tyeps'
import { fetchUserInfo } from '@/actions/users'
import Loader from '@/components/global/loader'
import Header from '@/components/main/header'
import UserHero from '@/components/user/hero'
import UserBio from '@/components/user/bio'

type Props = {
  params: {
    userId: string
  }
}

const UserPage = async ({ params }: Props) => {
  // const { userId: externalId } = auth()
  const user: UserInfo = await fetchUserInfo(params.userId)

  return (
    <>
      {!user && (
        <div className="flex justify-center items-center h-full">
          <Loader className="w-12 h-12" />
        </div>
      )}

      {!!user && (
        <>
          <Header showBackArrow label={user.name!} />
          <UserHero user={user} />
          <UserBio user={user} isSelf={true} />
        </>
      )}
    </>
  )
}

export default UserPage
