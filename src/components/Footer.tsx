import { FC } from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import Link from 'next/link'

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="w-full h-14 bg-zinc-100 grid inset-x-0 place-items-center mt-20">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2 border-t border-zinc-300">
        <Link href="/" className="flex gap-2 items-end">
          <Image src={logo} alt="logo" className="h-10 w-10 sm:h-8 sm:w-8" />
          <p className="hidden text-zinc-700 text-lg font-medium md:block">
            Task
          </p>
        </Link>

        <p className="capitalize text-sm text-zinc-700">{`${currentYear} all right reserved`}</p>
      </div>
    </footer>
  )
}

export default Footer
