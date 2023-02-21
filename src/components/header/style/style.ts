import styled from 'styled-components'

import { PrimaryTitle } from '../../../ui'

export const Header = styled.header`
  width: 100%;
  height: 60px;

  right: 80px;
  top: 15px;

  display: flex;
  justify-content: end;
  position: fixed;
`

export const WalletAddressTitle = styled(PrimaryTitle)`
  width: 145px;

  overflow: hidden;
  text-overflow: ellipsis;
`
