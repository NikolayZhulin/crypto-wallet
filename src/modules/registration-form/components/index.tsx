import React from 'react'

import { DEFAULT_DESCRIPTION } from '../../../common/constants/constants'
import { PrimaryTitle, Description } from '../../../ui'
import { RegistrationBlockWrapper } from '../style'

import { RegistrationForm } from './RegistrationForm'

export const RegistrationBlock = () => {
  return (
    <RegistrationBlockWrapper>
      <PrimaryTitle size={'36'}>BETA REGISTRATION</PrimaryTitle>
      <Description>{DEFAULT_DESCRIPTION}</Description>
      <RegistrationForm />
    </RegistrationBlockWrapper>
  )
}
