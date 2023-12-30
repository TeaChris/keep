'use client'

import { forwardRef } from 'react'
import { useFormStatus } from 'react-dom'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'

import { FormErrors } from './form-errors'
import { Combobox } from '../ui/combobox'

interface FormComboProps {
  id: string
  label?: string
  type?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  errors?: Record<string, string[] | undefined>
  className?: string
  defaultValue?: string
  onBlur?: () => void
  options: { label: string; value: string }[]
}

export const FormSelect = forwardRef<HTMLInputElement, FormComboProps>(
  ({ id, label, errors, options }, ref) => {
    const { pending } = useFormStatus()

    return (
      <div className="space-y-2">
        <div className="space-y-1">
          {label ? (
            <Label htmlFor={id} className="text-xs font-semibold text-primary">
              {label}
            </Label>
          ) : null}
          <Combobox
            onChange={function (value: string): void {
              throw new Error('Function not implemented.')
            }}
            options={...options}
            aria-describedby={`${id}-error`}
          />
        </div>
        <FormErrors id={id} errors={errors} />
      </div>
    )
  }
)

FormSelect.displayName = 'FormSelect'
