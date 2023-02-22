import React from 'react'

import { StatsItemContainer, StatsCount, StatsDescription } from '../style/style'

type Props = {
  count: string
  description: string
}

export const StatsItem = ({ count, description }: Props) => {
  return (
    <StatsItemContainer>
      <StatsCount>{count}</StatsCount>
      <StatsDescription>{description}</StatsDescription>
    </StatsItemContainer>
  )
}
