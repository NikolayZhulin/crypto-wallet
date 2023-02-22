import React from 'react'

import { MainImage, PrimaryTitle } from '../../../ui'
import { useUserInformation } from '../hooks/use-user-information'

import { UserInfoField } from './UserInfoField'

export const UserInfoContent = () => {
  const { response } = useUserInformation()

  if (response?.isLoading === true) {
    return <PrimaryTitle size={'45'}>LOADING...</PrimaryTitle>
  }

  if (response?.isError) {
    return <PrimaryTitle size={'45'}>ERROR</PrimaryTitle>
  }

  return (
    <>
      <PrimaryTitle size={'48'} primary={false}>
        personal data
      </PrimaryTitle>
      <UserInfoField label={'name'} title={response.data?.username} />
      <UserInfoField label={'email'} title={response.data?.email} />
      <UserInfoField label={'wallet'} title={response.data?.address} />
      <MainImage top={'130'} right={'-210'} />
    </>
  )
}
