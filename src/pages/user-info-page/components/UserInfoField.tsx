import React from 'react'

import { FlexBlock, PrimaryTitle } from '../../../ui'

type Props = {
  label: string
  title?: string
}

export const UserInfoField = ({ label, title }: Props) => {
  return (
    <FlexBlock flexDirection={'column'} alignItems={'flex-start'} margin={'20px 0'}>
      <PrimaryTitle size={'24'} primary={false}>
        {label}
      </PrimaryTitle>
      <PrimaryTitle size={'32'}>{title}</PrimaryTitle>
    </FlexBlock>
  )
}
