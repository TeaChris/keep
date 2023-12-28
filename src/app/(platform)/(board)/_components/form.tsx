'use client'

import { createTask } from '@/actions/create-task'
import { FormInput } from '@/components/form/form-input'
import { FormSubmit } from '@/components/form/form-submit'
import { Button } from '@/components/ui/button'
import { useAction } from '@/hooks/use-action'

export function Form() {
  const { execute, fieldErrors } = useAction(createTask, {
    onSuccess: (data) => {
      console.log(data, 'SUCCESS')
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string

    execute({ title })
  }

  return (
    <form action={onSubmit} className="mt-12">
      <div className="flex flex-col space-y-2">
        <FormInput id="title" errors={fieldErrors} label="Task Title" />
      </div>

      <FormSubmit>Save</FormSubmit>
    </form>
  )
}
