import { useEffect, useState } from 'react'

export const useOpenMetamaskModal = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    setOpen(true)
  }, [])

  return { open, handleClose }
}
