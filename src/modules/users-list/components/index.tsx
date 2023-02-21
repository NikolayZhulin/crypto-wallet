import React from 'react'

import { UsersTableContainer } from '../style/style'

import { UsersList } from './UsersList'

export const UsersTable = () => {
  return (
    <UsersTableContainer>
      <UsersList />
    </UsersTableContainer>
  )
}
