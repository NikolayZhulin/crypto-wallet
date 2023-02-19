import React from 'react'

import { BasicModal } from './components/metamask-modal'
import { GlobalStyle } from './styles/global'

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <BasicModal />
    </div>
  )
}
