import React from 'react'

import styled from 'styled-components'

import { FlexBlock } from './FlexBlock'

type Props = {
  top?: string
  left?: string
}

export const PlanetPointer = ({ top, left }: Props) => {
  return (
    <PlanetPointerWrapper top={top} left={left} justifyContent={'start'}>
      Q1 2022
      <LightPoint />
    </PlanetPointerWrapper>
  )
}

const PlanetPointerWrapper = styled(FlexBlock)<{ top?: string; left?: string }>`
  width: 50px;
  height: 20px;

  padding: 8px 20px;

  position: absolute;
  top: ${props => props.top || '0px'};
  left: ${props => props.left || '0px'};
  border-radius: 30px;

  font-family: 'BebasNeue-Regular', sans-serif;
  font-size: 14px;
  font-weight: 700;

  color: black;
  background: var(--white);

  &:after {
    content: '';
  }
`

const LightPoint = styled.div`
  width: 12px;
  height: 12px;

  position: absolute;

  right: 18px;
  top: 11px;

  border-radius: 50%;

  background: #fff;
  box-shadow: -2px -2px 6px rgba(50, 50, 50, 0.25), 2px 2px 6px rgba(50, 50, 50, 0.25);

  &:before {
    content: '';
    width: 6px;
    height: 6px;

    position: absolute;

    top: 3px;
    left: 3px;

    border-radius: 50%;

    background: var(--primary);
  }
`
