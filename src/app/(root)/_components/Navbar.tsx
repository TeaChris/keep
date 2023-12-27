import Link from 'next/link'
import { ArrowRight, Menu } from 'lucide-react'
import { UserButton, auth } from '@clerk/nextjs'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Icons } from '@/components/Icons'
import { buttonVariants } from '@/components/ui/button'
import ThemeSwitch from '@/components/ThemeSwitch.tsx'

export default function Navbar() {
  const { userId } = auth()
  return (
    <nav className="sticky flex items-center h-14 inset-x-0 top-0 w-full border-b border-border bg-background backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold gap-2 items-center">
            <Icons.logo className="h-9 w-9" />
            <h5 className="text-foreground text-xl">Taskzen</h5>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            {userId ? (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Pricing
                </Link>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Create
                </Link>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Database
                </Link>
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
              </>
            ) : (
              <>
                <Link
                  href={'/sign-in'}
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Sign in
                </Link>

                <Link
                  href={'/sign-up'}
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Get started <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
            <ThemeSwitch />
          </div>
          <div className="flex items-center space-x-4 sm:hidden">
            <>
              {!userId ? (
                <Link
                  href={'/sign-in'}
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Sign in
                </Link>
              ) : (
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: {
                        height: 20,
                        width: 20,
                      },
                    },
                  }}
                />
              )}
              <Menu className="w-6 h-6" />
              <ThemeSwitch />
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
