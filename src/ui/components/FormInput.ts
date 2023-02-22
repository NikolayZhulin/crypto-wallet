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
  background: var(--background);
  &:hover {
    border-color: var(--primary);
  }

  &:focus {
    border-color: var(--primary);
    outline: 1px solid var(--primary);
  }

  &:disabled {
    border: 1px solid grey;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 30px var(--background) inset !important;
    -webkit-text-fill-color: var(--white);
  }
  &:-webkit-autofill:hover {
    box-shadow: 0 0 0 30px var(--background) inset !important;
    -webkit-text-fill-color: var(--white);
  }
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 30px var(--background) inset !important;
    color: var(--white);
  }
`
