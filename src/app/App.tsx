import React from 'react'

import { CustomHeader, ErrorBar } from '../components'
import Pages from '../pages'
import { MaskModalProvider } from '../providers'
import { GlobalStyle } from '../styles/global'

export const App = () => {
  return (
    <MaskModalProvider>
      <GlobalStyle />
      <CustomHeader />
      <Pages />
      <ErrorBar />
    </MaskModalProvider>
  )
}
