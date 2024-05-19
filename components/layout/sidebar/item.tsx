import { IconType } from 'react-icons'

type Props = {
  label: string
  icon: IconType
  href?: string
  onClick?: () => void
}

const Item = ({ label, href, icon: Icon, onClick }: Props) => {
  return (
    <div onClick={onClick} className="flex items-center">
      <div className="relative flex lg:hidden justify-center items-center w-14 h-14 p-4 rounded-full cursor-pointer hover:bg-slate-300">
        <Icon size={28} color="white" />
      </div>

      <div className="relative hidden lg:flex items-center gap-4 w-full p-4 rounded-full cursor-pointer hover:bg-slate-300 hover:bg-opacity-10">
        <Icon size={24} color="white" />

        <p className="text-xl text-white">
          {label}
        </p>
      </div>
    </div>
  )
}

export default Item
