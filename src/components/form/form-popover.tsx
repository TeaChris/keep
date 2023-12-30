'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from '../ui/popover'

import { useAction } from '@/hooks/use-action'
import { createTask } from '@/actions/create-task'

import { FormInput } from './form-input'
import { FormSubmit } from './form-submit'
import { Button } from '../ui/button'
import { X } from 'lucide-react'
import { toast } from 'sonner'
import { FormTextarea } from './form-textarea'
import FormCombo from './form-combo'

interface FormPopoverProps {
  children: React.ReactNode
  side?: 'left' | 'right' | 'top' | 'bottom'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
}

export default function FormPopover({
  children,
  side = 'bottom',
  align,
  sideOffset = 0,
}: FormPopoverProps) {
  const { execute, fieldErrors } = useAction(createTask, {
    onSuccess: (data) => {
      console.log({ data })
      toast.success('Task created')
    },
    onError: (error) => {
      console.error({ error })
      toast.error(error)
    },
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const urgencyId = formData.get('urgencyId') as string
    const categoryId = formData.get('CategoryId') as string

    execute({ title, description, urgencyId, categoryId })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-80 pt-3"
        side={side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-muted-foreground pb-4">
          Create task
        </div>
        <PopoverClose asChild>
          <Button
            className="h-auto w-auto absolute p-2 top-2 right-2 text-muted-foreground"
            variant={'ghost'}
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <form className="space-y-4" action={onSubmit}>
          <div className="space-y-4">
            <FormInput
              id="title"
              label="Task title"
              type="text"
              errors={fieldErrors}
            />
            <FormTextarea
              id="description"
              label="Task description"
              errors={fieldErrors}
            />
            <FormCombo />
          </div>
          <FormSubmit className="w-full">Create</FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  )
}
