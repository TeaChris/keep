'use client'

import { ChangeEvent, forwardRef } from 'react'
import { useFormStatus } from 'react-dom'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'

import { FormErrors } from './form-errors'
import { Combobox } from '../ui/combobox'

interface ComboProps {
  options: { label: string; value: string }[]
  label: string
  id: string
  errors?: Record<string, string[] | undefined>
  onChange?: (value: string) => void
  value: string
}

export const FormSelect = forwardRef<HTMLInputElement, ComboProps>(
  ({ label, options, id, errors, onChange, value }, ref) => {
    const { pending } = useFormStatus()

    const handleSelectChange = (selectedValue: string) => {
      if (onChange) {
        onChange(selectedValue)
      }
    }

    return (
      <div className="space-y-2">
        <div className="space-y-1">
          {label ? (
            <Label htmlFor={id} className="text-xs font-semibold text-primary">
              {label}
            </Label>
          ) : null}
          <Combobox onChange={handleSelectChange} id={id} options={options} value={value}/>
        </div>
        <FormErrors id={id} errors={errors} />
      </div>
    )
  }
)

FormSelect.displayName = 'FormSelect'
