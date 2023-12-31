import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { userId } = auth()

    const { title, description, categoryId, urgencyId } = await req.json()

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const task = await db.task.create({
      data: {
        userId,
        title,
        description,
        categoryId,
        urgencyId,
      },
    })
    return NextResponse.json(task)
  } catch (error) {
    console.log('[CREATE_TASKS]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
