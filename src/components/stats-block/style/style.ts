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
