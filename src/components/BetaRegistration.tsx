import React from 'react'

import styled from 'styled-components'

import { FormInput } from '../ui/form-input/FormInput'

import { RegistrationForm } from './RegistrationForm'

export const BetaRegistration = () => {
  return (
    <div>
      <RegistrationTitle>BETA REGISTRATION</RegistrationTitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, dolorum expedita
        facere itaque labore quae saepe voluptatem? A architecto consequuntur debitis dicta dolorum
        et, fugit, illum laboriosam nam necessitatibus nemo nihil odit praesentium quidem rem.
      </Description>
      <RegistrationForm />
    </div>
  )
}

const RegistrationTitle = styled.div`
  font-family: 'BebasNeue-Regular', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
`

const Description = styled.div`
  width: 45%;
  margin-top: 20px;
  font-size: 16px;
  line-height: 120%;
  font-family: 'Avenir Next Cyr', sans-serif;
`
