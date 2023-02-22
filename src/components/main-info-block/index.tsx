import React from 'react'

import { DEFAULT_DESCRIPTION } from '../../common/constants/constants'
import { Description, MainImage, PlanetPointer } from '../../ui'
import { CircleAnimation } from '../../ui/components/Circle'

import { MAIN_TITLE_FIRST } from './constants/constants'
import { BlackTitle, MainInfoContainer, MainTitle } from './styles/style'

export const MainInfo = () => {
  return (
    <MainInfoContainer>
      <MainTitle>{MAIN_TITLE_FIRST}</MainTitle>
      <MainTitle>
        in
        <BlackTitle> our new </BlackTitle>
        metaverse
      </MainTitle>
      <MainImage top={'-150'} right={'-100'}>
        <CircleAnimation />
        <PlanetPointer top={'16px'} left={'217px'} />
      </MainImage>
      <Description>{DEFAULT_DESCRIPTION}</Description>
    </MainInfoContainer>
  )
}
