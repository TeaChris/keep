import { Hint } from '@/components/hint'
import { HelpCircle, User2 } from 'lucide-react'
import Link from 'next/link'

export function TaskList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg">
        <User2 className="h-6 w-6 mr-2" />
        Your tasks
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link href={'/users/projects'}>
          <div
            role="button"
            className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
          >
            <p className="text-sm">Create new task</p>
            <span className="text-xs">5 remaining</span>
            <Hint
              sideOffset={40}
              description={
                'Free workspace can have up to 5 open tasks. For unlimited tasks upgrade this workspace'
              }
            >
              <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]" />
            </Hint>
          </div>
        </Link>
      </div>
    </div>
  )
}
