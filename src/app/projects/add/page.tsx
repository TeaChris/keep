'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { useCategoryContext, useFormDataContext } from '@/context/store'
import AddForm from '@/components/AddForm'

type FormValues = {
  title: string
  author: string
  category: string
}

export default function Add() {
  const { categories } = useCategoryContext()
  const { addFormDataEntry } = useFormDataContext()

  // initial states
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  // controlled input for the form
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  // forms
  const form = useForm<FormValues>()
  // to track the form state with react-hook-form use 👇
  const { register, handleSubmit, formState, reset } = form
  const { errors } = formState

  const onSubmit = (data: FormValues) => {
    console.log('submitted', data)
    addFormDataEntry(title, author, selectedCategory)
    if (title.trim() === '') {
      setErrorMessage('Category name is required')
      return
    }
    // author
    if (author.trim() === '') {
      setErrorMessage('Category name is required')
      return
    }
    // category
    if (selectedCategory.trim() === '') {
      setErrorMessage('Category name is required')
      return
    }

    // reset input fields to empty state after submission
    setTitle('')
    setAuthor('')
    setSelectedCategory('')
  }

  return (
    <main className="w-full h-screen grid place-items-center pb-60">
      <div className="container mx-auto lg:w-[35rem] px-2 py-4 h-[30rem] lg:aspect-square rounded-md bg-zinc-100 shadow-sm shadow-zinc-300 flex flex-col items-center gap-10">
        <div>
          <h3 className="text-zinc-700 text-xl lg:text-2xl font-medium capitalize">
            create new project
          </h3>
        </div>

        <div className="w-full">
          <AddForm />
        </div>
      </div>
    </main>
  )
}
