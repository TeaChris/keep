'use server'

import { auth } from '@clerk/nextjs'
import { InputType, ReturnType } from './types'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { createSafeAction } from '@/lib/create-safe-actions'
import { CreateTask } from './schema'

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth()

  if (!userId) {
    return {
      error: 'Unauthorized',
    }
  }

  const { title, description, categoryId, urgencyId } = data

  let task

  try {
    task = await db.task.create({
      data: {
        title,
        userId,
        description,
        categoryId,
        urgencyId,
      },
    })
  } catch (error) {
    return {
      error: 'Internal Error',
    }
  }

  revalidatePath('/users/dashboard')
  return { data: task }
}

export const createTask = createSafeAction(CreateTask, handler)
