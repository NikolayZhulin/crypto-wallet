import styled from 'styled-components'

export const PrimaryTitle = styled.div<{ size: string; primary?: boolean }>`
  margin: 0;

  font-family: BebasNeue-Regular, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${props => props.size + 'px'};
  color: ${({ primary = true }) => (primary ? '#e75626' : '#fff')};
`
