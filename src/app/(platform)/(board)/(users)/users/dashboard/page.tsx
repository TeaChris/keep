import { Separator } from '@/components/ui/separator'
import Info from '../../../_components/Info'
import { FormInput } from '@/components/form/form-input'
import { Search } from 'lucide-react'
import { TaskList } from './_components/TaskList'

export default async function Dashboard() {
  return (
    <div className="mb-20">
      <div className="flex items-center justify-between">
        <Info />

        <div className="w-96 h-14 relative pr-1 text-muted-foreground">
          <FormInput
            id="123"
            placeholder="Enter your search here"
            className="h-11 rounded-xl pl-10 text-base"
          />
          <Search className="w-5 h-5 absolute top-4 left-4" />
        </div>
      </div>
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <TaskList />
      </div>
    </div>
  )
}
