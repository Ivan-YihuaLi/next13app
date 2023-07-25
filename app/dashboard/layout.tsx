import Navbar from '../../components/Navbar'

export const metadata = {
  title: 'Dashboard',
  description: 'My dashboard',
}
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  )
}
