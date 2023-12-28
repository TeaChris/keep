import { create } from '@/actions/createTask'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import { Tasks } from '../../../_components/Tasks'
import { Form } from '../../../_components/form'

export default async function Dashboard() {
  const tasks = await db.task.findMany()

  return (
    <div className="flex flex-col space-y-4">
      <Form />

      <div className="flex flex-col space-y-2">
        {tasks.map((task) => (
          <Tasks key={task.id} title={task.title} id={task.id} />
        ))}
      </div>
    </div>
  )
}
