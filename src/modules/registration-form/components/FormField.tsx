import React from 'react'

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import { CustomLabel } from '../../../ui'
import { FormFieldContainer } from '../style'

import { FieldContent } from './FieldContent'

type Props = {
  errors: FieldErrors
  placeholder: string
  label: string
  fieldName: string
  inputType: 'text' | 'email' | 'password'
  register: UseFormRegister<FieldValues>
}

export const FormField = ({
  placeholder,
  label,
  inputType,
  errors,
  fieldName,
  register,
}: Props) => {
  return (
    <FormFieldContainer alignItems={'flex-start'} flexDirection={'column'}>
      <CustomLabel>{label}</CustomLabel>
      <FieldContent
        fieldName={fieldName}
        errors={errors}
        inputType={inputType}
        placeholder={placeholder}
        register={register}
      />
    </FormFieldContainer>
  )
}
