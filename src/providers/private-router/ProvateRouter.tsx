import { Navigate, Outlet } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks'
import { PATH } from '../../common/utils'

export const PrivateRoutes = () => {
  const isRegistered = useAppSelector(state => state.app.isRegistered)

  return isRegistered ? <Outlet /> : <Navigate to={PATH.MAIN} />
}
