import { Separator } from '@/components/ui/separator'
import Info from '../../../_components/Info'
import { Create } from './_components/Create'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'

export default async function Page() {
  const { userId } = auth()

  if (!userId) {
    redirect('/')
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  const urgencies = await db.urgency.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  return (
    <div className="mb-20">
      <div className="flex items-center justify-between">
        <Info />
      </div>
      <Separator className="my-4" />
      <div className="flex items-center justify-center mt-20">
        <div className="w-1/2 bg-card h-max pb-12 shadow-md rounded-md">
          <div className="w-full h-12 flex items-center justify-center">
            <h5 className="text-sm font-medium text-center text-muted-foreground">
              Create task
            </h5>
          </div>
          <Separator className="my-4" />
          <Create
            categories={categories.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
            urgencies={urgencies.map((urgency) => ({
              label: urgency.name,
              value: urgency.id,
            }))}
          />
        </div>
      </div>
    </div>
  )
}
