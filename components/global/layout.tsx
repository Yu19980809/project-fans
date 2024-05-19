import Sidebar from '@/components/layout/sidebar'
import FollowBar from '@/components/layout/followbar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen bg-black">
      <div className="container max-w-6xl h-full mx-auto xl:px-30">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />

          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
            {children}
          </div>

          <FollowBar />
        </div>
      </div>
    </div>
  )
}

export default Layout
