import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  BringToFront,
  LayoutGrid,
  LucideIcon,
  MessageCircle,
} from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

interface SidebarItemProps {
  isExpanded: Record<string, any>
  onExpand: (id: string) => void
}

const routes = [
  {
    icon: <LayoutGrid className="h-5 w-5 mr-2" />,
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    icon: <BringToFront className="h-5 w-5 mr-2" />,
    label: 'Projects',
    href: '/projects',
  },
  {
    icon: <MessageCircle className="h-5 w-5 mr-2" />,
    label: 'Chat',
    href: '/Chat',
  },
]

export default function SidebatItem({
  isExpanded,
  onExpand,
}: SidebarItemProps) {
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
            'flex items-center text-lg gap-x-3 p-1.5 text-sky-500 rounded-md hover:primary/70 transition text-start no-underline hover:no-underline',
            !isExpanded && 'bg-primary/80 font-semibold text-xl'
          )}
        >
          Main Menu
        </AccordionTrigger>
        <AccordionContent className="pt-1 text-neutral-500">
          {routes.map((route) => (
            <Button
              key={route.href}
              size="sm"
              onClick={() => onClick(route.href)}
              className={cn(
                'w-full font-normal justify-start pl-10 mb-1',
                pathname === route.href && 'bg-sky-500/30 text-sky-500'
              )}
              variant="ghost"
            >
              {route.icon}
              {route.label}
            </Button>
          ))}
        </AccordionContent>
      </AccordionItem>
    </>
  )
}
