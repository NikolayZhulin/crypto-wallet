import { useAppSelector } from '../../../app/hooks'

export const useUserInfo = () => {
  const isRegistered = useAppSelector(state => state.app.isRegistered)
  const userName = useAppSelector(state => state.app.currentUserName)
  const userEmail = useAppSelector(state => state.app.currentUserEmail)
  const userId = useAppSelector(state => state.app.currentUserId)
  const userAddress = useAppSelector(state => state.app.currentUserAddress)

  return { isRegistered, userEmail, userName, userId, userAddress }
}
