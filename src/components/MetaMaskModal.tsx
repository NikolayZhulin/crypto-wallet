import * as React from 'react'
import { useEffect } from 'react'

import { Link } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'

import { PrimaryButton } from '../ui/Button'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 422,
  height: 295,
  display: 'flex',
  justifyContent: 'center',
  boxShadow: 24,
  p: 4,
  background: '#262628',
}

export const MetamaskModal = () => {
  const [open, setOpen] = React.useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              width: '320px',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <h2>METAMASK EXTENTION</h2>
            <div style={{ fontSize: '16px' }}>
              To work with application, you have to install the
              <Link> Metamask browser extension</Link>
            </div>
            <PrimaryButton title={'SKIP THIS STEP'} onClick={handleOpen} />
          </div>
        </Box>
      </Modal>
    </div>
  )
}
