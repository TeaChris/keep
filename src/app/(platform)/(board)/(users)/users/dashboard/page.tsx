import { Separator } from '@/components/ui/separator'
import Info from './_components/Info'

export default async function Dashboard() {
  return (
    <div className="mb-20">
      <Info />
      <Separator className="my-4" />

      <div className="px-2 md:px-4">TaskList</div>
    </div>
  )
}
