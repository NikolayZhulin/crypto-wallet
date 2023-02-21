import React, { FC, ReactNode } from 'react'

import { MetaMaskModal } from '../../components'

import { useOpenMetamaskModal } from './hooks/use-open-metamask-modal'

type Props = {
  children: ReactNode
}

export const MaskModalProvider: FC<Props> = ({ children }) => {
  const { open, handleClose } = useOpenMetamaskModal()

  return (
    <>
      <MetaMaskModal handleClose={handleClose} open={open} />
      {children}
    </>
  )
}
