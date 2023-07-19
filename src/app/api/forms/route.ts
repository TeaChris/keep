import { PrismaClient } from '@prisma/client'
import { getSession } from 'next-auth/react'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.$connect()
  } catch (error) {
    return Error('Database connection unsuccessful')
  }
}

export const GET = async (request: Request, response: NextResponse) => {
  try {
    await main()
    const formData = await prisma.formData.findMany()
    return NextResponse.json({ message: 'Success', formData }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export const POST = async (request: Request, response: NextResponse) => {
  try {
    const session = await getSession()
    const { title, author, category } = await request.json()
    await main()

    const userId = session?.user.id
    const formData = await prisma.formData.create({
      data: { title, author, category, user: { connect: { id: userId } } },
    })
    return NextResponse.json({ message: 'Success', formData }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  } finally {
    await prisma.$disconnect
  }
}
