import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import { CategoryProvider, FormDataProvider } from '@/context/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bermuda: Task Manager',
  description:
    'An app that allows you to manage you tasks in an organized and efficient manner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        'bg-white text-slate-900 antialiased light',
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <CategoryProvider>
          <FormDataProvider>
            <NavBar />
            <div className="container max-w-7xl mx-auto h-full pt-12">
              {children}
            </div>
            {/* <Footer /> */}
          </FormDataProvider>
        </CategoryProvider>
        <Toaster />
      </body>
    </html>
  )
}
