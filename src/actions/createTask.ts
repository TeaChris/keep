'use server'

import { z } from 'zod'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export type State = {
  errors?: {
    title?: string[]
  }
  message?: string | null
}

const CreateTask = z.object({
  title: z.string().min(5, {
    message: 'minimum of 3 letters is required',
  }),
})

export async function create(prevState: State, formData: FormData) {
  const validatedFields = CreateTask.safeParse({
    title: formData.get('title'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields',
    }
  }

  const { title } = validatedFields.data

  try {
    await db.task.create({
      data: {
        title,
      },
    })
  } catch (error) {
    return {
      message: 'Database Error',
    }
  }

  revalidatePath('/users/dashboard')
  redirect('/users/dashboard')
}
