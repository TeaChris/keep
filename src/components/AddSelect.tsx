'use client'

import { useCategoryContext } from '@/context/store'
import { useState } from 'react'

export default function AddSelect() {
  const { categories } = useCategoryContext()
  const [selectedCategory, setSelectedCategory] = useState('')
  return (
    <div className="w-full h-fit">
      <select
        className='className="w-full h-8 p-1 flex items-center justify-between border border-zinc-300 focus:outline-none"
'
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option>Select a category</option>
        {categories.map((category) => {
          return (
            <option
              value={category.name}
              className="capitalize"
              key={category.id}
            >
              {category.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}
