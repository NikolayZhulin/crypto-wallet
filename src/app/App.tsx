import React from 'react'

import { ThemeProvider } from 'styled-components'

import { CustomHeader, ErrorBar } from '../components'
import Pages from '../pages'
import { MaskModalProvider } from '../providers'
import { GlobalStyle } from '../styles/global'
import { baseTheme } from '../styles/theme'

export const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <MaskModalProvider>
        <GlobalStyle />
        <CustomHeader />
        <Pages />
        <ErrorBar />
      </MaskModalProvider>
    </ThemeProvider>
  )
}
