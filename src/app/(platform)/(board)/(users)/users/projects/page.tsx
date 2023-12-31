import { Separator } from '@/components/ui/separator'
import Info from '../../../_components/Info'

export default function Page() {
  return (
    <div className="mb-20">
      <div className="flex items-center justify-between">
        <Info />
      </div>
      <Separator className="my-4" />
      <div className="flex items-center justify-center mt-20">
        <div className="w-1/2 bg-card h-[30rem] shadow-md rounded-md"></div>
      </div>
    </div>
  )
}
