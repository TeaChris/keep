'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { useCategoryContext } from '@/context/store'
import { ChangeEvent, useState } from 'react'

type FormValue = {
  category: string
}
export default function Create() {
  const { addCategory } = useCategoryContext()
  const [categoryName, setCategoryName] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const form = useForm<FormValue>()
  // to track the form state with react-hook-form use 👇
  const { register, handleSubmit, formState, reset } = form
  const { errors } = formState

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value)
    setErrorMessage('')
  }

  const onSubmit = (data: FormValue) => {
    addCategory(categoryName)
    if (categoryName.trim() === '') {
      setErrorMessage('Category name is required')
      return
    }
    // Reset the input field to an empty string
    setCategoryName('')
  }
  return (
    <main className="w-full h-screen grid place-items-center pb-96">
      <div className="container mx-auto lg:w-[35rem] px-2 py-4 h-72 rounded-md bg-zinc-100 shadow-sm shadow-zinc-300 flex flex-col items-center gap-10">
        <div>
          <h3 className="text-zinc-700 text-xl lg:text-2xl font-medium capitalize">
            create new category
          </h3>
        </div>
        <form
          className="w-full h-28 flex flex-col items-start gap-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="w-full h-full flex flex-col items-start gap-3">
            <Label htmlFor="category">Category</Label>
            <Input
              type="category"
              id="category"
              value={categoryName}
              onChange={handleChange}
              placeholder="Enter Category"
            />
            <p className="text-rose-500 text-xs">{errorMessage}</p>
          </div>
          <Button>Create</Button>
        </form>
      </div>
    </main>
  )
}
