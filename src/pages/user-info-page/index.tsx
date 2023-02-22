import React from 'react'

import { FlexBlock } from '../../ui'

import { UserInfoContent } from './components/UserInfoContent'

export const UserInfo = () => {
  return (
    <FlexBlock flexDirection={'column'} alignItems={'flex-start'} margin={'160px 0 0 0'}>
      <UserInfoContent />
    </FlexBlock>
  )
}
