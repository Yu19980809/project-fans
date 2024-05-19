'use client'

import { useRouter } from 'next/navigation'
import { BsTwitter } from 'react-icons/bs'

const Logo = () => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push('/')}
      className="flex justify-center items-center w-14 h-14 p-4 rounded-full transition cursor-pointer hover:bg-blue-300"
    >
      <BsTwitter size={28} color="white" />
    </div>
  )
}

export default Logo
