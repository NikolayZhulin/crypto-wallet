import React from 'react'

import styled from 'styled-components'

export const RoadMapStats = () => {
  return (
    <InfoContainer>
      <StatsTitle>ROADMAP STATS</StatsTitle>
      <div>
        <StatsItemTitle><StatsTitle/>
        <div>121212</div>
      </div>
      <div>
        <div>121212</div>
      </div>
      <div>
        <div>121212</div>
      </div>
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
  width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    border-bottom: 1px solid white;
  }
  & div:last-child {
    border: none;
  }
`

const StatsTitle = styled.h3`
  text-align: center;
`
