'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

// Category types
type Category = {
  id: number
  name: string
}

type CategoryContextType = {
  categories: Category[]
  addCategory: (name: string) => void
  deleteCategory: (id: number) => void
  editCategory: (id: number, name: string) => void
}

type FormDataEntry = {
  id: number
  title: string
  name: string
  category: string
}

type FormDataContextType = {
  formDataEntries: FormDataEntry[]
  addFormDataEntry: (title: string, name: string, category: string) => void
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
)
const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
)

export const useCategoryContext = (): CategoryContextType => {
  const context = useContext(CategoryContext)
  if (!context) {
    throw new Error('useCategoryContext must be used within a CategoryProvider')
  }
  return context
}

export const useFormDataContext = (): FormDataContextType => {
  const context = useContext(FormDataContext)
  if (!context) {
    throw new Error('useFormDataContext must be used within a FormDataProvider')
  }
  return context
}

type CategoryProviderProps = {
  children: React.ReactNode
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({
  children,
}) => {
  const [categories, setCategories] = useState<Category[]>([])

  // adding category to the list
  const addCategory = (name: string) => {
    const newCategory: Category = {
      id: categories.length + 1,
      name,
    }
    setCategories((prevCategories) => [...prevCategories, newCategory])
  }

  // delete category from the list
  const deleteCategory = (id: number) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    )
    setCategories(updatedCategories)
  }

  // edit category in the list
  const editCategory = (id: number, name: string) => {
    const updatedCategories = categories.map((category) =>
      category.id == id ? { ...category, name } : category
    )
    setCategories(updatedCategories)
  }

  return (
    <CategoryContext.Provider
      value={{ categories, addCategory, deleteCategory, editCategory }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formDataEntries, setFormDataEntries] = useState<FormDataEntry[]>([])

  const addFormDataEntry = (title: string, name: string, category: string) => {
    const newEntry: FormDataEntry = {
      id: formDataEntries.length + 1,
      title,
      name,
      category,
    }
    setFormDataEntries((prevEntries) => [...prevEntries, newEntry])
  }

  return (
    <FormDataContext.Provider value={{ formDataEntries, addFormDataEntry }}>
      {children}
    </FormDataContext.Provider>
  )
}
