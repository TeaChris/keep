import { db } from '@/lib/db'

export type GetCategoryInput = {
  id?: string
  name?: string
}

export type Category = {
  id: string
  name: string
}

export const getCategories = async ({
  id,
  name,
}: GetCategoryInput): Promise<Category[]> => {
  try {
    const categories = await db.category.findMany({
      where: {
        id,
        name,
      },
    })
    return categories
  } catch (error) {
    console.error('Error in getCategories:', error)
    throw error // Throw the error for the calling code to handle
  }
}
