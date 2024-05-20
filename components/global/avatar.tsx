'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { cn } from '@/lib/utils'

type Props = {
  userId: string
  image: string | null,
  isLarge?: boolean
  hasBorder?: boolean
}

const Avatar = ({ userId, image, isLarge, hasBorder }: Props) => {
  const router = useRouter()

  const onClick = useCallback((e: any) => {
    e.stopPropagation()

    router.push(`/users/${userId}`)
  }, [router, userId])

  return (
    <div className={cn(
      'relative rounded-full cursor-pointer transition hover:opacity-90',
      hasBorder && 'border-4 border-black',
      isLarge ? 'w-32 h-32' : 'w-12 h-12'
    )}>
      <Image
        onClick={onClick}
        src={image || '/logo.png'}
        alt="Avatar"
        fill
        className="rounded-full object-cover"
      />
    </div>
  )
}

export default Avatar
