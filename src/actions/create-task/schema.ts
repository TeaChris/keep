import { z } from 'zod'

export const CreateTask = z.object({
  title: z
    .string({
      required_error: 'TItle is required',
      invalid_type_error: 'Title is required',
    })
    .min(3, {
      message: 'Title is too short',
    }),
  description: z
    .string({
      required_error: 'Description is required',
      invalid_type_error: 'Description is required',
    })
    .min(10, {
      message: 'Description is too short',
    }),
  categoryId: z
    .string({
      required_error: 'Category is required',
      invalid_type_error: 'Category is required',
    })
    .min(10, {
      message: 'Category is too short',
    }),
  urgencyId: z
    .string({
      required_error: 'Urgency is required',
      invalid_type_error: 'Urgency is required',
    })
    .min(10, {
      message: 'Urgency is too short',
    }),
})
