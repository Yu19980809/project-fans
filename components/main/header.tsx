'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { BiArrowBack } from 'react-icons/bi'

type Props = {
  label: string
  showBackArrow?: boolean
}

const Header = ({ label, showBackArrow}: Props) => {
  const router = useRouter()

  const onBack = useCallback(() => router.back(), [router])

  return (
    <div className="p-5 border-b border-neutral-800">
      <div className="flex items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={onBack}
            size={20}
            color="white"
            className="cursor-pointer transition hover:opacity-70"
          />
        )}

        <h1 className="font-semibold text-xl text-white">
          {label}
        </h1>
      </div>
    </div>
  )
}

export default Header
