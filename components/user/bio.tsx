'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { BiCalendar } from 'react-icons/bi'

import { UserInfo } from '@/lib/tyeps'
import { Button } from '@/components/ui/button'
import EditModal from '@/components/modals/edit-modal'

type Props = {
  user: UserInfo
  isSelf: boolean
}

const UserBio = ({ user, isSelf }: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <>
      <EditModal user={user} open={modalOpen} setOpen={setModalOpen} />

      <div className="pb-4 border-b border-neutral-800">
        <div className="flex justify-end p-2">
          {isSelf ? (
            <Button onClick={() => setModalOpen(true)}>Edit</Button>
          ) : (
            <Button>Follow</Button>
          )}
        </div>

        <div className="mt-8 px-4">
          <div className="flex flex-col">
            <p className="font-semibold text-2xl text-white">
              {user.name}
            </p>

            <p className="text-md text-neutral-500">
              @{user.username}
            </p>
          </div>

          <div className="flex flex-col mt-4">
            <p className="text-white">{user.bio}</p>

            <div className="flex items-center gap-2 mt-4 text-neutral-500">
              <BiCalendar size={24} />
              <p>Joined {format(new Date(user.createdAt), 'MMMM yyyy')}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-1">
              <p className="text-white">{user.followingIds.length}</p>
              <p className="text-neutral-500">Following</p>
            </div>

            <div className="flex items-center gap-1">
              <p className="text-white">{user.followersCount || 0}</p>
              <p className="text-neutral-500">Followers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserBio
