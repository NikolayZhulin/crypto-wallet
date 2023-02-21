import { useEffect } from 'react'

import { useEthers } from '@usedapp/core'

import { setUserWallet } from '../../../app/app-reducer'
import { useAppDispatch } from '../../../app/hooks'

export const useWallet = () => {
  const dispatch = useAppDispatch()
  const { account, activateBrowserWallet } = useEthers()
  const connectToMetamask = async () => {
    activateBrowserWallet()
    dispatch(setUserWallet({ account }))
  }

  useEffect(() => {
    dispatch(setUserWallet({ account }))
  }, [account])

  return { account, connectToMetamask }
}
