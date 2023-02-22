import React from 'react'

import { PrimaryTitle } from '../../../ui'
import { TABLE_TITLE } from '../constants/constants'
import { useUserList } from '../hooks/use-user-list'

import { UsersListBody } from './UsersListBody'
import { UsersListHead } from './UsersListHead'

export const UsersList = () => {
  const { rows, isRegistered, isLoading, userId, deleteCurrentUser } = useUserList()

  if (!isRegistered) {
    return <></>
  }
  if (isLoading) {
    return <PrimaryTitle size={'45'}>LOADING...</PrimaryTitle>
  }

  return (
    <>
      <PrimaryTitle size={'36'} primary={false}>
        {TABLE_TITLE}
      </PrimaryTitle>
      <UsersListHead />
      <UsersListBody userId={userId} rows={rows} deleteCurrentUser={deleteCurrentUser} />
    </>
  )
}
