import { useEffect, useState } from 'react'

import { useUserInfo } from '../../../common/utils'
import { useLazyGetUsersListQuery } from '../api/usersApi'
import { createData } from '../helpers/create-table-data'
import { UserRowType } from '../types/user-list-types'

export const useUserList = () => {
  const { userEmail, userName, isRegistered, userId, userAddress } = useUserInfo()
  const [trigger, response] = useLazyGetUsersListQuery()
  const [rows, setRow] = useState<UserRowType[]>([])

  useEffect(() => {
    if (isRegistered) {
      trigger({})
    }
  }, [isRegistered])

  useEffect(() => {
    if (response?.data) {
      let rowsFromBack: UserRowType[] = response?.data?.map((el: UserRowType) =>
        createData(el.id, el.username, el.email, el.address)
      )

      if (isRegistered) {
        rowsFromBack = [
          { id: 100, username: userName, email: userEmail, address: userAddress },
          ...rowsFromBack,
        ]
      }

      setRow(rowsFromBack)
    }
  }, [response])

  const deleteCurrentUser = () => {
    const newRows = rows.filter(row => row.id !== userId)

    setRow(newRows)
  }

  const isLoading = response.isLoading

  return { rows, userId, isRegistered, isLoading, deleteCurrentUser }
}
