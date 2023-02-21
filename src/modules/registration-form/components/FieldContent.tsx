import React from 'react'

import { ErrorMessage } from '@hookform/error-message'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import { useUserInfo } from '../../../common/utils'
import { PrimaryTitle, StyledInputElement, ValidationErrorSpan } from '../../../ui'

type Props = {
  errors: FieldErrors
  placeholder: string
  fieldName: string
  inputType: 'text' | 'email' | 'password'
  register: UseFormRegister<FieldValues>
}

export const FieldContent = ({ placeholder, inputType, errors, fieldName, register }: Props) => {
  const { userEmail, userName, isRegistered } = useUserInfo()

  if (isRegistered) {
    return <PrimaryTitle size={'32'}>{fieldName === 'email' ? userEmail : userName}</PrimaryTitle>
  }

  return (
    <>
      <StyledInputElement {...register(fieldName)} placeholder={placeholder} type={inputType} />
      <ErrorMessage
        errors={errors}
        name={fieldName}
        render={({ message }) => {
          return <ValidationErrorSpan>{message || 'Unknown error'}</ValidationErrorSpan>
        }}
      />
    </>
  )
}
