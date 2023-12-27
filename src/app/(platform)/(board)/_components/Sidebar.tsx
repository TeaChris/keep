'use client'

import { useLocalStorage } from 'usehooks-ts'

import { Accordion } from '@/components/ui/accordion'

import SidebatItem from './SidebatItem'
import Headline from './Headlines'

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
      <div className="font-medium text-xs flex items-center mb-1 pt-4">
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

      <div className="font-medium text-xs flex items-center mb-1">
        <Accordion
          type="multiple"
          defaultValue={defaultAccordionValue}
          className="space-y-2 w-full"
        >
          <Headline key={'wertyuijnb'} />
        </Accordion>
      </div>
    </>
  )
}
