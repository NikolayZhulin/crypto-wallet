import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { PATH } from '../common/utils'
import { PrivateRoutes } from '../providers'

import { ErrorPage } from './error-page'
import { MainPage } from './main-page'
import { UserInfo } from './user-info-page'

const Pages = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={PATH.MAIN} />} />
      <Route element={<PrivateRoutes />}>
        <Route path={PATH.USER_INFO + ':id'} element={<UserInfo />} />
      </Route>
      <Route path={PATH.MAIN} element={<MainPage />} />
      <Route path={'*'} element={<ErrorPage />} />
    </Routes>
  )
}

export default Pages
