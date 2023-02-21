import React from 'react'

import styled from 'styled-components'

type Props = {
  title: string
  onClick: () => void
  disabled?: boolean
}
export const PrimaryButton = ({ title, onClick, disabled }: Props) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {title}
    </Button>
  )
}

const Button = styled.button`
  height: 40px;

  padding: 10px 24px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  outline: none;
  border: none;

  font-family: BebasNeue-Regular, sans-serif;
  font-size: 18px;
  text-transform: uppercase;

  border-radius: 30px;

  &:hover {
    background: #be3b10;
  }

  &:disabled {
    opacity: 0.5;
  }

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.font};
`
