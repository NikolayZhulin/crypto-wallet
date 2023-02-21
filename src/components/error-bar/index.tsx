import { SyntheticEvent } from 'react'

import { Alert, Snackbar } from '@mui/material'

import { setError } from '../../app/app-reducer'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export const ErrorBar = () => {
  const error = useAppSelector(state => state.app.error)
  const dispatch = useAppDispatch()
  const handleClose = (event?: Event | SyntheticEvent<any, Event>, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(setError({ error: null }))
  }

  const isOpen = error !== null

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {error}
      </Alert>
    </Snackbar>
  )
}
