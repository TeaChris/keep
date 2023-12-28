'use server'

import { db } from '@/lib/db'

import { revalidatePath } from 'next/cache'

export async function deleteTask(id: string) {
  await db.task.delete({
    where: {
      id,
    },
  })

  revalidatePath('/users/dashboard')
}
