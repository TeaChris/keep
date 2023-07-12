import Image from 'next/image'
import { FC } from 'react'
import logo from '@/assets/logo.svg'
import Link from 'next/link'
import { getAuthSession } from '@/lib/auth'
import UserAccountNav from './UserAccountNav'
import { buttonVariants } from './ui/button'

const Navbar = async () => {
  const session = await getAuthSession()
  return (
    <nav className="w-full h-14 grid place-items-center bg-zinc-100 border-b border-zinc-300 z-10 fixed top-0 inset-x-0">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-end">
          <Image src={logo} alt="logo" className="h-10 w-10 sm:h-8 sm:w-8" />
          <p className="hidden text-zinc-700 text-lg font-medium md:block">
            Task
          </p>
        </Link>

        {/* search box */}

        <div className="w-20 h-full grid place-items-center">
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link href="/sign-in" className={buttonVariants()}>
              sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
