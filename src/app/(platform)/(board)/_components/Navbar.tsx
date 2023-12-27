import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { Icons } from '@/components/Icons'
import Link from 'next/link'
import ThemeSwitch from '@/components/ThemeSwitch.tsx'
import MobileSidebar from './MobileSidebar'

export default function Navbar() {
  return (
    <nav className="px-4 sticky flex items-center h-14 inset-x-0 top-0 w-full border-b border-border bg-background backdrop-blur-lg transition-all">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <Link href="/" className="flex z-40 font-semibold gap-2 items-center">
          <Icons.logo className="h-9 w-9" />
          <h5 className="text-foreground text-xl">Taskzen</h5>
        </Link>
        <Button
          size="sm"
          className="rounded-sm hidden md:block h-auto  py-1.5 px-2"
        >
          Create
        </Button>
        <Button size="sm" className="rounded-sm block md:hidden">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
        <ThemeSwitch />
      </div>
    </nav>
  )
}
