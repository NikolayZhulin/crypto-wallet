import { Link } from '@mui/material'
import styled from 'styled-components'

export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 422,
  height: 295,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  boxShadow: 24,
  p: 4,
  background: '#262628',
}

export const ModalWrapper = styled.div`
  width: 320px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary);
  &:hover,
  &:focus {
    color: var(--primary-hover);
  }
  &:active {
    color: var(--primary);
  }
`

export const LinkTextWrapper = styled.span`
  color: var(--primary);
  text-decoration: none;

  &:hover {
    color: var(--primary-hover);
  }
`
