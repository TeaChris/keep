import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Icons } from './Icons'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import ThemeSwitch from './ThemeSwitch.tsx'

export default function Navbar() {
  return (
    <nav className="sticky flex items-center h-14 inset-x-0 top-0 w-full border-b border-border bg-background backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold gap-2 items-center">
            <Icons.logo className="h-9 w-9" />
            <h5 className="text-foreground text-xl">Taskzen</h5>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
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
              <ThemeSwitch />
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}