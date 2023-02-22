import React from 'react'

import { PrimaryTitle, FlexBlock } from '../../ui'

import { StatsItems } from './components/StatsItems'
import { StatsItemContainer } from './style/style'

export const StatsBlock = () => {
  return (
    <FlexBlock flexDirection={'column'} margin={'20px 0 0 0'}>
      <PrimaryTitle primary={false} size={'32'}>
        ROADMAP STATS
      </PrimaryTitle>
      <StatsItemContainer flexDirection={'column'}>
        <StatsItems />
      </StatsItemContainer>
    </FlexBlock>
  )
}
