// 'use client'

import { BiLogOut } from 'react-icons/bi'
import { SignOutButton } from '@clerk/nextjs'

import { SidebarLinks } from '@/lib/constants'
import TweetButton from './tweet-button'
import Logo from './logo'
import Item from './item'

const Sidebar = () => {
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <Logo />

          {SidebarLinks.map(item => (
            <Item
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
              // onClick={}
            />
          ))}

          <SignOutButton redirectUrl='/'>
            <Item label="Logout" icon={BiLogOut} />
          </SignOutButton>

          <TweetButton />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
