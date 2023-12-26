import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: '%s | ${siteConfig.name}',
  },
  description: siteConfig.description,
  icons: [
    {
      url: '/logo.svg',
      href: '/logo.svg',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'relative min-h-screen font-sans antialiased grainy',
          inter.className
        )}
      >
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  )
}
