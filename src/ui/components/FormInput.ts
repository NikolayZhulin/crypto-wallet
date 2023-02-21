import styled from 'styled-components'

export const StyledInputElement = styled.input`
  width: 420px;
  padding: 12px 18px;
  font-family: 'Avenir Next Cyr', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #ffffff;
  border: 1px solid white;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.bg};
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    border: 1px solid grey;
  }

  &:-webkit-autofill {
    background: ${({ theme }) => theme.colors.bg};
  }
`
