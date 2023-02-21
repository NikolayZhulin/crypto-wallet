import React from 'react'

import { MainInfoBlock, RegistrationBlock } from '../../modules'
import { UsersTable } from '../../modules/users-list/components'

import { Container } from './styles/style'

export const MainPage = () => {
  return (
    <>
      <MainInfoBlock />
      <Container>
        <RegistrationBlock />
        <UsersTable />
      </Container>
    </>
  )
}
