'use client'

import { FormSubmit } from '@/components/form/form-submit'
import { toast } from 'sonner'
import { z } from 'zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Combobox } from '@/components/ui/combobox'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  title: z.string().min(5, {
    message: 'Title is required',
  }),
  description: z.string().min(5, {
    message: 'Description is required',
  }),
  categoryId: z.string().min(5, {
    message: 'Category is required',
  }),
  urgencyId: z.string().min(5, {
    message: 'Urgency is required',
  }),
})

interface CreateProps {
  categories: { label: string; value: string }[]
  urgencies: { label: string; value: string }[]
}

export function Create({ categories, urgencies }: CreateProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      categoryId: '',
      urgencyId: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post('/api/task', values)
      toast.success('Task created')
      form.reset()
    } catch {
      toast.error('Something went wrong')
    }
  }

  const { isSubmitting, isValid } = form.formState

  return (
    <Form {...form}>
      <form className="space-y-4 px-3" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="w-full h-fit flex flex-col items-start gap-1">
                    <FormLabel
                      className="text-sm font-medium tracking-wider"
                      htmlFor="title"
                    >
                      Title
                    </FormLabel>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Advanced web development'"
                      {...field}
                      className="w-full"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="w-full h-fit flex flex-col items-start gap-1">
                    <FormLabel
                      className="text-sm font-medium tracking-wider"
                      htmlFor="description"
                    >
                      Description
                    </FormLabel>
                    <Textarea
                      disabled={isSubmitting}
                      placeholder="e.g. 'Finish up with clean up functions'"
                      {...field}
                      className="w-full"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="w-full h-fit flex flex-col items-start gap-1">
                    <FormLabel
                      className="text-sm font-medium tracking-wider"
                      htmlFor="category"
                    >
                      Category
                    </FormLabel>
                    <Combobox options={categories} {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="urgencyId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="w-full h-fit flex flex-col items-start gap-1">
                    <FormLabel
                      className="text-sm font-medium tracking-wider"
                      htmlFor="urgency"
                    >
                      Urgency
                    </FormLabel>
                    <Combobox options={urgencies} {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>Create</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
