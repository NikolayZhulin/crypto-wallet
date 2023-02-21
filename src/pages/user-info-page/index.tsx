import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useLazyGetUserQuery } from '../../modules/users-list/api/usersApi'
import { FlexBlock, PrimaryTitle, MainImage } from '../../ui'

import { UserInfoField } from './components/UserInfoField'

export const UserInfo = () => {
  const [trigger, response] = useLazyGetUserQuery()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    trigger(id)
  }, [id])

  if (response?.isLoading === true) {
    return <PrimaryTitle size={'45'}>LOADING...</PrimaryTitle>
  }

  if (response?.isError) {
    return <PrimaryTitle size={'45'}>ERROR</PrimaryTitle>
  }

  return (
    <FlexBlock flexDirection={'column'} alignItems={'flex-start'} margin={'160px 0 0 0'}>
      <PrimaryTitle size={'48'} primary={false}>
        personal data
      </PrimaryTitle>
      <UserInfoField label={'name'} title={response?.data?.username} />
      <UserInfoField label={'email'} title={response?.data?.email} />
      <UserInfoField label={'wallet'} title={response?.data?.address} />
      <MainImage top={'200'} right={'-100'} />
    </FlexBlock>
  )
}
