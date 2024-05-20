import { User } from '@prisma/client'

import { fetchAllusers } from '@/actions/users'
import Avatar from '@/components/global/avatar'

const FollowBar = async () => {
  const users = await fetchAllusers()

  if (!users || users.length === 0) return null

  return (
    <div className="lg:block hidden px-6 py-4">
      <div className="p-4 rounded-xl bg-neutral-800">
        <h2 className="font-semibold text-xl text-white">Who to follow</h2>

        <div className="flex flex-col gap-6 mt-4">
          {users.map((item: User) => (
            <div key={item.id} className="flex gap-4">
              <Avatar userId={item.id} image={item.image} />

              <div className="flex flex-col text-sm">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-neutrall-400">@{item.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FollowBar