import React from 'react'

import styled from 'styled-components'

type Props = {
  title: string
  onClick: () => void
}
export const PrimaryButton = ({ title, onClick }: Props) => {
  return <Button onClick={onClick}>{title}</Button>
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

  border-radius: 30px;

  &:hover {
    background: #be3b10;
  }

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.font};
`
