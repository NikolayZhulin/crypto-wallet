import styled from 'styled-components'

import { FlexBlock } from '../../../ui'

export const StatsItemContainer = styled(FlexBlock)`
  width: 200px;

  div {
    padding: 8px;
    border-bottom: 1px solid white;
  }
  & div:last-child {
    border: none;
  }
`
export const StatsCount = styled.h2`
  font-family: BebasNeue-Regular, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 28px;
  margin: 0;
  color: var(--primary);
`

export const StatsDescription = styled.div`
  font-family: BebasNeue-Regular, sans-serif;
  text-align: center;
  text-transform: uppercase;
  color: var(--white);
  font-weight: 400;
  font-size: 18px;
  padding: 0;
`
