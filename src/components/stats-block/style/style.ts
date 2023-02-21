import styled from 'styled-components'

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StatsItemContainer = styled(StatsContainer)`
  width: 200px;

  div {
    padding: 8px;
    border-bottom: 1px solid white;
  }
  & div:last-child {
    border: none;
  }
`
