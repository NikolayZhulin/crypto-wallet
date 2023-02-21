import styled from 'styled-components'

export const FlexBlock = styled.div<{
  alignItems?: string
  justifyContent?: string
  flexDirection?: string
  margin?: string
}>`
  display: flex;
  align-items: ${props => props.alignItems || 'center'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  margin: ${props => props.margin || '0px'};
`
