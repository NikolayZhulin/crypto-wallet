import React from 'react'

import { TableTitleWrapper, TableHead } from '../style/style'

export const UsersListHead = () => {
  return (
    <TableHead>
      <div>
        <TableTitleWrapper>NAME</TableTitleWrapper>
      </div>
      <div>
        <TableTitleWrapper>EMAIL</TableTitleWrapper>
      </div>
      <div>
        <TableTitleWrapper>WALLET</TableTitleWrapper>
      </div>
    </TableHead>
  )
}
