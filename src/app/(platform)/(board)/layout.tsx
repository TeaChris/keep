import Navbar from './_components/Navbar'

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  )
}
