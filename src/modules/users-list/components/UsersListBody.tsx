import React from 'react'

import { Link } from 'react-router-dom'

import { PATH } from '../../../common/utils'
import {
  ScrollContainer,
  TableItemWrapper,
  TableRowWrapper,
  WalletAddressWrapper,
  CloseIcon,
} from '../style/style'
import { UserRowType } from '../types/user-list-types'

type Props = {
  rows: UserRowType[]
  deleteCurrentUser: () => void
  userId: number
}

export const UsersListBody = ({ rows, deleteCurrentUser, userId }: Props) => {
  return (
    <ScrollContainer>
      {rows?.map(row => (
        <div key={row.id}>
          <Link
            to={row.id !== 100 ? PATH.USER_INFO + row.id : ''}
            style={{ textDecoration: 'none' }}
          >
            <TableRowWrapper>
              <div>
                <TableItemWrapper>{row.username}</TableItemWrapper>
              </div>
              <div>
                <TableItemWrapper>{row.email}</TableItemWrapper>
              </div>
              <div>
                <WalletAddressWrapper>{row.address}</WalletAddressWrapper>
              </div>
            </TableRowWrapper>
          </Link>
          <CloseIcon vision={row.id === userId} onClick={deleteCurrentUser}>
            x
          </CloseIcon>
        </div>
      ))}
    </ScrollContainer>
  )
}
