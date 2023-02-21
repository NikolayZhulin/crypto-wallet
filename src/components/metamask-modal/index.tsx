import * as React from 'react'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

import { PrimaryButton, PrimaryTitle } from '../../ui'

import { ModalWrapper, style, StyledLink, LinkTextWrapper } from './style/style'

type Props = {
  open: boolean
  handleClose: () => void
}

export const MetaMaskModal = ({ open, handleClose }: Props) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ModalWrapper>
          <PrimaryTitle size={'36'}>METAMASK EXTENTION</PrimaryTitle>
          <div>
            To work with application, you have to install the
            <StyledLink
              href={'https://metamask.io/'}
              target={'_blank'}
              style={{ textDecoration: 'none' }}
            >
              <LinkTextWrapper> Metamask browser extension</LinkTextWrapper>
            </StyledLink>
          </div>
          <PrimaryButton title={'SKIP THIS STEP'} onClick={handleClose} />
        </ModalWrapper>
      </Box>
    </Modal>
  )
}
