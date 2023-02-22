import { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useLazyGetUserQuery } from '../../../modules/users-list/api/usersApi'

export const useUserInformation = () => {
  const [trigger, response] = useLazyGetUserQuery()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    trigger(id)
  }, [id])

  return { response }
}
