import axios from 'axios'

type FormValues = {
  title: string
  author: string
  category: string
}

export async function submitForm(data: FormValues) {
  try {
    const response = await axios.post('/api/forms', data)
    if (response.status === 201) {
      console.log('Form data submitted successfully')
    } else {
      throw new Error(`Form submission failed with status ${response.status}`)
    }
  } catch (error: unknown) {
    console.error('Form submission error:', (error as Error).message)
  }
}
