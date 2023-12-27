import Sidebar from '../../_components/Sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="w-full sm:h-auto md:h-auto lg:h-auto xl:h-auto">
      <div className="flex h-full w-full">
        <div className="w-[20%] shrink-0 hidden md:block h-full">
          <Sidebar />
        </div>
        <div className="w-full md:w-[80%] h-full bg-secondary inset-2">
          {children}
        </div>
      </div>
    </main>
  )
}
