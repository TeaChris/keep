'use client'
import { useCategoryContext } from '@/context/store'
import { FC } from 'react'

interface CategoryDataProps {}

const CategoryData: FC<CategoryDataProps> = ({}) => {
  const { categories } = useCategoryContext()
  return (
    <div className="w-full h-fit items-start gap-4">
      {categories.map((category) => {
        return (
          <div
            className="w-full h-fit px-2 py-4 bg-zinc-100 flex items-center justify-between"
            key={category.id}
          >
            <span className="text-sm text-zinc-700 capitalize">
              {category.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryData
