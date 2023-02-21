import React from 'react'

import { DEFAULT_DESCRIPTION } from '../../common/constants/constants'
import { Description, MainImage } from '../../ui'

import { MAIN_TITLE_FIRST, MAIN_TITLE_SECOND } from './constants/constants'
import { MainInfoContainer, MainTitle } from './styles/style'

export const MainInfo = () => {
  return (
    <MainInfoContainer>
      <MainTitle>{MAIN_TITLE_FIRST}</MainTitle>
      <MainTitle>{MAIN_TITLE_SECOND}</MainTitle>
      <MainImage top={'-145'} right={'135'} />
      <Description>{DEFAULT_DESCRIPTION}</Description>
    </MainInfoContainer>
  )
}
