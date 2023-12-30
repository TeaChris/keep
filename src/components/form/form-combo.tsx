import { db } from '@/lib/db'
import { Label } from '../ui/label'
import { Urgency } from '../Urgency'

export default function FormCombo() {
  return (
    <div className="w-full space-y-4">
      <div className="space-y-1">
        <Label htmlFor="" className="text-xs font-semibold text-primary">
          Urgency
        </Label>
      </div>
      <div className="space-y-1">
        <Label htmlFor="" className="text-xs font-semibold text-primary">
          Category
        </Label>
      </div>
    </div>
  )
}
