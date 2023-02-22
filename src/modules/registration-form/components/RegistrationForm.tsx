import React from 'react'

import { PrimaryButton } from '../../../ui'
import { EMAIL_PLACEHOLDER, NAME_PLACEHOLDER } from '../constants/constants'
import { useRegistration } from '../hooks/use-registration'
import { FormContainer } from '../style'

import { FormField } from './FormField'

export const RegistrationForm = () => {
  const { errors, onSubmit, register, isRegistered, userAddress } = useRegistration()
  const registeredBtnTitle = isRegistered ? 'list me to the table' : 'get early access'

  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <FormField
          placeholder={NAME_PLACEHOLDER}
          label={'name'}
          inputType={'text'}
          errors={errors}
          fieldName={'name'}
          register={register}
        />
        <FormField
          placeholder={EMAIL_PLACEHOLDER}
          label={'email'}
          inputType={'email'}
          errors={errors}
          fieldName={'email'}
          register={register}
        />
        <PrimaryButton
          disabled={isRegistered || !userAddress}
          title={registeredBtnTitle}
          onClick={onSubmit}
        />
      </form>
    </FormContainer>
  )
}
