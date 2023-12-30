'use client'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'

interface HeadlineProps {}

const routes = [
  {
    label: 'Projects',
    href: '/users/projects',
  },
]

export default function Headline({}: HeadlineProps) {
  const pathname = usePathname()
  const router = useRouter()

  const onClick = (href: string) => {
    router.push(href)
  }

  return (
    <>
      <AccordionItem value={'item-1'} className="border-none">
        <AccordionTrigger
          className={cn(
            'flex items-center text-lg gap-x-3 p-1.5 text-sky-500 rounded-md hover:primary/70 transition text-start no-underline hover:no-underline'
          )}
        >
          New
        </AccordionTrigger>
        <AccordionContent className="pt-1 text-neutral-500">
          {routes.map((route) => (
            <Button
              key={route.href}
              size="sm"
              onClick={() => onClick(route.href)}
              className={cn(
                'w-full font-semibold justify-start pl-10 mb-1',
                pathname === route.href && 'bg-sky-500/30 text-sky-500'
              )}
              variant="ghost"
            >
              {route.label}
            </Button>
          ))}
        </AccordionContent>
      </AccordionItem>
    </>
  )
}
