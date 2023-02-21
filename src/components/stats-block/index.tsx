import React from 'react'

import { PrimaryTitle } from '../../ui'

import { StatsItems } from './StatsItems'
import { StatsContainer, StatsItemContainer } from './style/style'

export const StatsBlock = () => {
  return (
    <StatsContainer>
      <PrimaryTitle primary={false} size={'32'}>
        ROADMAP STATS
      </PrimaryTitle>
      <StatsItemContainer>
        <StatsItems />
      </StatsItemContainer>
    </StatsContainer>
  )
}
