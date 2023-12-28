import { z } from 'zod'

export const CreateTask = z.object({
  title: z
    .string({
      required_error: 'TItle s required',
      invalid_type_error: 'Title is required',
    })
    .min(3, {
      message: 'Title is too short',
    }),
})
