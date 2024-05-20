import Image from 'next/image'

import { UserInfo } from '@/lib/tyeps'
import Avatar from '../global/avatar'

type Props = {
  user: UserInfo
}

const UserHero = ({ user }: Props) => {
  return (
    <div className="relative h-44 bg-neutral-700">
      {user.coverImage && (
        <Image
          src={user.coverImage}
          alt="Cover Image"
          fill
          className="object-cover"
        />
      )}

      <div className="absolute -bottom-16 left-4">
        <Avatar userId={user.id} image={user.image} isLarge hasBorder />
      </div>
    </div>
  )
}

export default UserHero
