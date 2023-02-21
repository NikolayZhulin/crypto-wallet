import React from 'react'

import styled from 'styled-components'

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

export const StatsCount = styled.h2`
  font-family: BebasNeue-Regular, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 28px;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`

export const StatsDescription = styled.div`
  font-family: BebasNeue-Regular, sans-serif;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  padding: 0;
`

export const StatsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`
