const { PrismaClient } = require('@prisma/client')

async function categories() {
  const database = new PrismaClient()

  try {
    await database.$connect()

    // check if categories already exist
    const existingCategories = await database.category.findMany()

    if (existingCategories.length === 0) {
      await database.category.createMany({
        data: [
          { name: 'Engineering' },
          { name: 'Product' },
          { name: 'Data' },
          { name: 'Security' },
          { name: 'Technical' },
        ],
      })
      console.log('Categories seeding success')
    } else {
      console.log('Categories already exist, skipping seeding')
    }
  } catch (error) {
    console.error('Error seeding categories')
  } finally {
    await database.$disconnect()
  }
}

async function urgency() {
  const database = new PrismaClient()

  try {
    await database.$connect()

    // Check if categories exist before creating them
    const existingLanguage = await database.urgency.findMany()

    if (existingLanguage.length === 0) {
      await database.urgency.createMany({
        data: [{ name: 'High' }, { name: 'Medium' }, { name: 'Low' }],
      })
      console.log('Urgency seeding success')
    } else {
      console.log('Urgency already exist, skipping seeding.')
    }
  } catch (error) {
    console.error('Error seeding the Urgency', error)
  }
}

async function main() {
  await categories()
  await urgency()
}

main()
