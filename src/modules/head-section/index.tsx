import React from 'react'

import { MainInfo, StatsBlock } from '../../components'
import { FlexBlock } from '../../ui'

export const MainInfoBlock = () => {
  return (
    <FlexBlock justifyContent={'space-between'} margin={'200px 0 110px 0'}>
      <MainInfo />
      <StatsBlock />
    </FlexBlock>
  )
}
