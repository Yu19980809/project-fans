import { BsHouseFill, BsBellFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'

export const SidebarLinks = [
  {
    label: 'Home',
    href: '/',
    icon: BsHouseFill
  },
  {
    label: 'Notifications',
    href: '/notifications',
    icon: BsBellFill
  },
  {
    label: 'Profile',
    href: '/users/:id',
    icon: FaUser
  }
]
