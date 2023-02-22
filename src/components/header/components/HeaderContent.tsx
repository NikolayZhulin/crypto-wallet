import React from 'react'

import { PrimaryButton } from '../../../ui'
import { useWallet } from '../hooks/use-wallet'
import { WalletAddressTitle } from '../style/style'

export const HeaderContent = () => {
  const { account, connectToMetamask } = useWallet()

  if (account) {
    return <WalletAddressTitle size={'18'}>{account}</WalletAddressTitle>
  }

  return <PrimaryButton title={'CONNECT METAMASK'} onClick={connectToMetamask} />
}
