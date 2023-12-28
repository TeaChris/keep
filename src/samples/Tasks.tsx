import { deleteTask } from '@/actions/deletetask'
import { Button } from '@/components/ui/button'

interface TasksProps {
  title: string
  id: string
}

export function Tasks({ title, id }: TasksProps) {
  const deleteTaskWithId = deleteTask.bind(null, id)
  return (
    <form className="flex items-center gap-x-2" action={deleteTaskWithId}>
      <p>Task title:{title}</p>
      <Button type="submit" variant={'destructive'} size={'sm'}>
        Delete
      </Button>
    </form>
  )
}
