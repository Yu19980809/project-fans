import Layout from '@/components/global/layout'

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <div className="h-full">
      <Layout>{children}</Layout>
    </div>
  )
}

export default RootLayout
