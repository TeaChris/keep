'use client'

import Link from 'next/link'
import { LayoutGrid, MessageCircle, BringToFront } from 'lucide-react'
import { useLocalStorage } from 'usehooks-ts'

import { Button } from '@/components/ui/button'
import { Accordion } from '@/components/ui/accordion'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'

import SidebatItem from './SidebatItem'

interface SidebarProps {
  storageKey?: string
}

export default function Sidebar({
  storageKey = 't-sidebar-state',
}: SidebarProps) {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  )

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key)
      }

      return acc
    },
    []
  )

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }))
  }


  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1 pt-14">
        <Accordion
          type="multiple"
          defaultValue={defaultAccordionValue}
          className="space-y-2 w-full"
        >
          <SidebatItem
            key={'wertyuijnb'}
            isExpanded={expanded}
            onExpand={onExpand}
          />
        </Accordion>
      </div>
    </>
  )
}
