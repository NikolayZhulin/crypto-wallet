import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { setUserInfo } from '../../app/app-reducer'
import { useAppDispatch } from '../../app/hooks'
import { schemaRegister } from '../../common/utils/register-validation'
import { FormField } from '../../components/FormField'
import { PrimaryButton } from '../../ui'

export const RegistrationForm = () => {
  const dispatch = useAppDispatch()

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schemaRegister) })

  const onSubmit = handleSubmit(async ({ currentUserName, currentUserEmail }) => {
    dispatch(setUserInfo({ currentUserName, currentUserEmail }))
  })

  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <FormField
          placeholder={'name'}
          label={'NAME'}
          control={control}
          inputType={'text'}
          errors={errors}
          fieldName={'name'}
        />
        <FormField
          placeholder={'email'}
          label={'EMAIL'}
          control={control}
          inputType={'email'}
          errors={errors}
          fieldName={'email'}
        />
        <PrimaryButton title={'GET EARLY ACCESS'} onClick={onSubmit} />
      </form>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 0;
`
