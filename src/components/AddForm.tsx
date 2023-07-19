'use client'

import { Button } from './ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Label } from './ui/label'
import { submitForm } from '@/utils/form'
import { useCategoryContext } from '@/context/store'

type FormValues = {
  title: string
  author: string
  category: string
}

export default function AddForm() {
  const { categories } = useCategoryContext()
  const form = useForm<FormValues>()
  const { register, handleSubmit, reset, formState } = form
  const { errors } = formState

  const onSubmit = async (data: FormValues) => {
    try {
      await submitForm(data)
      console.log('Form data submitted successfully')
      reset()
    } catch (error: unknown) {
      console.error('Form submission error:', (error as Error).message)
    }
  }

  return (
    <form
      className="w-full h-fit flex flex-col items-start gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full h-20 flex flex-col items-start gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          {...register('title', { required: true })}
        />
        {errors.title && (
          <p className="text-rose-500 text-xs">Title is required</p>
        )}
      </div>

      <div className="w-full h-20 flex flex-col items-start gap-2">
        <Label htmlFor="author">Author</Label>
        <Input
          type="text"
          id="author"
          {...register('author', { required: true })}
        />
        {errors.title && (
          <p className="text-rose-500 text-xs">Title is required</p>
        )}
      </div>

      <div className="w-full h-20 flex flex-col items-start gap-2">
        <Label htmlFor="category">Category</Label>
        <select
          className="w-full h-8 p-1 flex items-center justify-between border border-zinc-300 focus:outline-none"
          id="category"
          {...register('category', { required: true })}
        >
          <option value="">Select a category</option>
          {categories?.length ? (
            categories.map((category) => {
              return (
                <option
                  value={category.id}
                  key={category.id}
                  className="capitalize"
                >
                  {category.name}
                </option>
              )
            })
          ) : (
            <option value="" disabled>
              No categories available
            </option>
          )}
        </select>
        {errors.category && (
          <p className="text-rose-500 text-xs">Category is required</p>
        )}
      </div>

      <div className="w-full h-20 flex flex-col items-start gap-2">
        <Button isLoading={form.formState.isSubmitting}>create</Button>
      </div>
    </form>
  )
}
